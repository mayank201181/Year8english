/* English kit: the recurring cast, sets and "English on screen" props of ALL THE SCHOOL'S A STAGE, the Claude
   Sitcom for Year 8 English. Bundled after lib.js, kit.js and sitcom.js when a script's META has
   "kit": ["sitcom", "english"]. Read lessons/SITCOM_BIBLE.md first: it says who these people are.
   Every top-level name here starts with `eng` or `ENG_`. An episode's own lib.js must use its own prefix
   (e.g. `ep1`, `tmp`) and usually defines `cast(parent, kind, o)` for its guests, falling back to engCast.

   Recurring cast: engCast(parent, kind, o) -> g (origin at the character's centre, about 260 px tall at s = 1)
     o: { s (scale), mood (default mood) }
     g.set({ t, talk, mood, look, sweat, still, ...extras })   call every frame
       talk 0..1 (scTalk(S, t, who)); mood: neutral | happy | smug | annoyed | sad | shock | deadpan
       look -1..1 pupils left/right; sweat 0..1; still: true stops the idle bob
     kinds (= the `who` key in script.py):
       'mei'    Mei Tan, 12, the student. Teal school polo with a "BH" crest, black bob with a straight fringe,
                yellow hair clip, round red glasses. Extras: hand 0..1 (raises her right hand, as in class),
                phone 0..1 (holds up her phone; draw on g.phoneScreen, 76 x 128, origin at its centre).
       'mrh'    Mr Hargreaves ("Mr H"), her English teacher: bald top, grey sides and beard, reading glasses
                pushed up on his head, tweed jacket, maroon tie, staff lanyard, eye bags. Default deadpan.
                Extras: mug 0..1 (holds his mug "TO TEA OR NOT TO TEA").
       'will'   Will, the ghost of William Shakespeare: pale blue, see-through, glowing; domed forehead,
                long hair at the sides, moustache and pointed beard, gold hoop earring, white ruff, doublet,
                a wispy ghost tail instead of legs. Floats. Extras: quill 0..1 (holds up a quill),
                glow 0..1 (extra glow: dramatic moments, magic).
       'nib'    Nib, Mr H's fountain pen: a burgundy barrel with gold bands and clip, gold nib at the bottom,
                gold monocle on a chain, black curly moustache. Pompous. Default smug.
                Extras: ink 0..1 (an ink blot spreads under his nib: shock, outrage).
       'kevin'  Kevin, an anxious comma: an indigo comma (round head, curled tail) with stubby arms.
                Default neutral, often sweating. Extras: bag 0..1 (breathes into a paper bag; it puffs in/out).
     engMeiBody(parent)        Mei full body (kit person in uniform + bob + glasses dot), feet at (0,0); g.pose(walkPose(t))
     ENG_CAST                  { kind: { name, role } } caption names and default lower-third roles
     engLower(parent, kind)    scLowerThird with the default NAME / role for a recurring character

   Shots
     engConf(parent, who)      confessional background tinted for that character (scConfessional); g.set(p, t)
     ENG_TINT                  the confessional colours per character (episodes may add guests: ENG_TINT.prospero = [a, b])
     engTitle(parent, epLine)  the show's title card: red curtains, gold proscenium, logo, episode line.
                               g.set(p, t) (p 0..1 opens the curtains and pops the logo). g.logo, g.ep (text)

   Sets (full stage 1200 x 750, each returns g; keep the top-left tag area x < 560, y < 100 free of anything important)
     engClassroom(parent)  Room 8H: whiteboard (g.board = { x, y, w, h }), windows with palms and HDB blocks,
                           ceiling fan, Mr H's desk with his mug collection (g.mugs = n shown, g.setMugs(n)),
                           posters "SHOW, DON'T TELL" and "PEEL". g.upd(t) spins the fan. g.desk = [x, y].
     engLibrary(parent)    the school library at dusk: tall shelves, arched window, green reading lamp, the
                           "SILENCE PLEASE" sign (g.sign), the bust of Shakespeare (g.bust) that Will hates.
                           g.upd(t, spooky 0..1): lamp flicker, books rattle, dust. g.table = [x, y] table top.
     engHall(parent)       the school hall: stage with curtains, lectern, banner, wall fans, chair backs in the
                           foreground. g.curtain(open 0..1); g.upd(t); g.stage = [x, y] stage floor centre;
                           g.spot(p, x) a spotlight on the stage at x.
     engFlat(parent)       Mei's HDB living room: window onto the block opposite with laundry poles, sofa, coffee
                           table (kaya toast), TV, wall clock, ceiling fan, kitchen doorway (Ah Ma is off-screen in
                           there: g.door = [x, y]). g.upd(t); g.clock(hours); g.table = [x, y].
     engGlobe(parent)      inside the Globe, 1599: thrust stage, two painted pillars, the "heavens" canopy, the
                           tiring house (two doors, a balcony), galleries, open sky, groundlings in the yard.
                           g.upd(t, rowdy 0..1); g.stage = [x, y] (front-centre of the stage floor);
                           g.crowd = [{ g, x, y }] the groundlings (for throwing things); g.balcony = [x, y].
     engGlobeOutside(parent)  the Globe from outside on the Thames bank: white walls, timber, thatch, the flag
                           that means "a play today". g.upd(t) waves the flag and the river.

   English on screen (props, around their own origin)
     engQuote(parent, o)   THE QUOTE CARD. o: { text, who, where, w (760), size (40), hl: ['word', ...] }.
                           Parchment card, big rose quotation marks, the quotation wrapped to w, then
                           "WHO · where" (where = "Romeo and Juliet, Act 2 Scene 2"). Centred on (0,0).
                           g.set(p) pops it in; g.mark(k, p) sweeps a highlighter over hl[k] (k = -1: all);
                           g.w, g.h; g.wordXY(k) -> [x, y] of hl[k]'s centre (card coordinates).
     engTech(parent, label, o)  TECHNIQUE CHIP: a luggage-tag label "SOLILOQUY" in its category colour, with an
                           optional definition strip under it. o: { kind: 'language' | 'structure' | 'form' |
                           'context' | 'drama' | 'punct' | 'grammar', def, size (34), w }. g.set(p) swings it in.
     ENG_TECH              the category colours (use them for every technique, in every episode)
     engPeel(parent, rows, o)  MINI PEEL LADDER. rows: 4 strings (Point, Evidence, Explain, Link), "**bold**"
                           allowed; o: { w (680), size (26), title }. P is the top rung (it reads down like a
                           paragraph). g.set(n) shows the first n rungs (fractions pop the next one). g.h is its height; origin = top centre.
     engScan(parent, sylls, o)  SCANSION STRIP for metre. sylls: ['But', 'soft', 'what', ...]; o: { stress:
                           'u/u/u/u/u/' (default iambic, one char per syllable), size (40), maxW (1040),
                           feet (true: brackets in pairs) }. Origin = centre of the row.
                           g.set(p) reveals syllables left to right; g.marks(p) shows the stress marks;
                           g.feet(p) the foot brackets and numbers; g.ball(x) a bouncing ball over syllable x
                           (fractional index, bounces high on stressed syllables; x < 0 hides it);
                           g.hit(i, v) brightens syllable i. g.n syllables.
     engCard(parent, text, o)   a wrapped text card. o: { w (620), size (32), fill, stroke, color, tab (e.g.
                           'TRAP 1'), tabCol, icon: 'tick' | 'cross' }. Centred on (0,0); g.w, g.h.
     engWrap(text, size, maxW, font, weight)  -> lines (keeps **bold** runs intact)
     engBubble(parent, text, o) speech bubble; o: { size (32), tail: 'down' | 'left' | 'right' | 'none', w }
     engStamp(parent, text, col)  rubber stamp ("FIRST RECORDED USE", "PROSE", "VERSE"); g.set(p) thumps it in
     engStars(parent, o)   a row of 5 review stars; o: { size (44) }; g.set(n) fills n stars (fractions pop)
     engReview(parent, o)  a review card: stars, a quote and a byline. o: { stars, text, by, w }; g.set(n) stars
     engPhone(parent, s)   a phone (screen 152 x 256 at s = 1): draw on g.screen (origin at screen centre)
     engBook(parent, title, col, s)  a standing hardback, cover facing us, about 150 x 200 at s = 1
     engScroll(parent, w, h)  a parchment scroll; g.body is where to write (origin at its centre)
     engMug(parent, s)     Mr H's mug "TO TEA OR NOT TO TEA" with steam; g.upd(t)
     engQuill(parent, s)   a feather quill, nib at (0,0), about 160 long, pointing down-left
     engSkull(parent, s)   a skull (for Yorick and Hamlet), about 120 wide
     engMasks(parent, s)   comedy and tragedy masks, about 220 wide
     engCurtains(parent, w, h)  red stage curtains across a w x h opening (origin top-left); g.set(open 0..1)
     engPaper(parent, w, h, o)  a page of a playscript or book (white, ruled faintly); o.title; centred

   Scene helpers (pure functions, use them inside a scene's update)
     engOn(t, a, b)                    1 while a <= t < b (a hard sitcom cut), else 0
     engPop(el, t, t0, x, y, s, r)     pops el in at t0 (overshoot) at (x, y), scale s, rotation r; returns p
     engOut(el, t, t0, t1, x, y, s, r) pops in at t0 and fades out at t1 (0.25 s); returns visibility
     engView(el, k, fx, fy, sx, sy)    camera: scale k about (fx, fy) and put that point at (sx, sy)
     engOutline(textEl, col, w)        a thick outline behind text (logos, big words)
     engShake(t, t0, amp)              [dx, dy] screen shake that dies away after t0
     engQuizScene(S, o)                the whole quick-fire quiz chapter: returns the update function.
                                       Lines: intro, q1..q5 (pause 4.0), a1..a5, outro, then optional extra lines.
                                       o: { cast: (parent, who) => g (default engCast), title, accent,
                                       extra: (t) => {} drawn on top each frame, layer: g for extras }.
*/

/* ---------- palette ---------- */
const ENG = {
  parch: '#FBF3DC', parchDk: '#E9D9B0', parchEdge: '#C9AE74', ink: '#2A1A22',
  rose: '#F06A8A', roseDk: '#B8335A', gold: '#E2B33C', goldDk: '#9C7A1E',
  violet: '#B58CFF', amber: '#FFB547', sky: '#5AB4E0', teal: '#2BA39A',
  ghost: '#DDEBFF', ghostDk: '#7FA6D9', wood: '#8B5A2B', woodDk: '#5A3A1A',
};
const ENG_TECH = {
  language: '#FF7EB6', structure: '#5AB4E0', form: '#56D69B', context: '#FFC247',
  drama: '#FF9F43', punct: '#B58CFF', grammar: '#8FD3FF',
};
const ENG_CAST = {
  mei: { name: 'MEI TAN, 12', role: 'Year 8. Banyan Hill International School.' },
  mrh: { name: 'MR HARGREAVES', role: 'Head of English. 23 years. 23 mugs.' },
  will: { name: 'WILL', role: 'The ghost of William Shakespeare (1564–1616). Reads his reviews.' },
  nib: { name: 'NIB', role: 'Fountain pen. Technical terms. Very expensive.' },
  kevin: { name: 'KEVIN', role: 'A comma. Anxious. Usually in the wrong place.' },
};
const ENG_TINT = {
  mei: ['#0F2E3A', '#1F5A63'], mrh: ['#2A2018', '#55402C'], will: ['#121C38', '#2E3F78'],
  nib: ['#2E0F1C', '#5E1E36'], kevin: ['#16163A', '#2E2E6E'], narr: ['#14243A', '#25446B'],
};
function engConf(parent, who) { const c = ENG_TINT[who] || ENG_TINT.narr; return scConfessional(parent, c[0], c[1]); }
function engLower(parent, kind) { const c = ENG_CAST[kind]; return scLowerThird(parent, c.name, c.role); }

/* ---------- scene helpers ---------- */
function engOn(t, a, b) { return t >= a && t < b ? 1 : 0; }
function engPop(el, t, t0, x, y, s, r) {
  const p = P(t, t0, 0.45, pop);
  op(el, clamp(p * 2.5)); tr(el, x, y, Math.max(0.01, (s || 1) * (0.6 + 0.4 * p)), r);
  return p;
}
function engOut(el, t, t0, t1, x, y, s, r) {
  const p = P(t, t0, 0.45, pop), v = clamp(p * 2.5) * (1 - P(t, t1, 0.25, linear));
  op(el, v); if (v > 0) tr(el, x, y, Math.max(0.01, (s || 1) * (0.6 + 0.4 * p)), r);
  return v;
}
function engView(el, k, fx, fy, sx, sy) {
  el.setAttribute('transform', `translate(${sx.toFixed(1)} ${sy.toFixed(1)}) scale(${k.toFixed(4)}) translate(${(-fx).toFixed(1)} ${(-fy).toFixed(1)})`);
}
function engOutline(t, col, w) {
  t.setAttribute('stroke', col); t.setAttribute('stroke-width', w); t.setAttribute('paint-order', 'stroke'); t.setAttribute('stroke-linejoin', 'round');
  return t;
}
function engShake(t, t0, amp) {
  const k = t < t0 ? 0 : Math.max(0, 1 - (t - t0) / 0.5) * (amp || 10);
  return [Math.sin(t * 90) * k, Math.cos(t * 77) * k * 0.7];
}

/* ---------- text wrapping ---------- */
function engWrap(text, size, maxW, font, weight) {
  // split into words, remembering which are bold, then greedily fill lines
  const words = [];
  String(text).split(/(\*\*[^*]+\*\*)/).forEach(seg => {
    if (!seg) return;
    const bold = seg.startsWith('**');
    (bold ? seg.slice(2, -2) : seg).split(/\s+/).forEach((w, i, arr) => {
      if (w) words.push({ w, bold, glue: !bold && i === 0 && !/^\s/.test(seg) && words.length > 0 });
    });
  });
  const lines = []; let cur = [];
  const str = ws => {
    let s = '', inB = false;
    ws.forEach((x, i) => {
      const sp = i === 0 || x.glue ? '' : ' ';
      if (x.bold && !inB) { s += sp + '**'; inB = true; s += x.w; }
      else if (!x.bold && inB) { s += '**' + sp + x.w; inB = false; }
      else s += sp + x.w;
    });
    return inB ? s + '**' : s;
  };
  words.forEach(x => {
    const tryL = cur.concat([x]);
    if (cur.length && textWidth(str(tryL), size, font || FD, weight || 700) > maxW && !x.glue) { lines.push(str(cur)); cur = [x]; }
    else cur = tryL;
  });
  if (cur.length) lines.push(str(cur));
  return lines;
}

/* ---------- the recurring cast ---------- */
function engCast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  let c;
  if (kind === 'mei') {
    let hand = null, phone = null;
    c = scMake(parent, Object.assign(S, { seed: 11, bob: 2,
      draw: g => {
        const skin = '#EDC39B', hair = '#17100E';
        E('path', { d: 'M-74,-40 Q-92,40 -70,70 L70,70 Q92,40 74,-40 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3 }, g);   // bob, behind
        hand = G(g);   // raised right arm (behind the shirt)
        E('path', { d: 'M62,96 Q96,40 102,-60', fill: 'none', stroke: '#2BA39A', 'stroke-width': 30, 'stroke-linecap': 'round' }, hand);
        E('rect', { x: 88, y: -88, width: 30, height: 30, rx: 12, fill: skin, stroke: SC_INK, 'stroke-width': 3 }, hand);
        E('path', { d: 'M-100,140 Q-96,62 -40,52 L40,52 Q96,62 100,140 Z', fill: '#2BA39A', stroke: SC_INK, 'stroke-width': 4 }, g);   // polo
        E('path', { d: 'M-34,52 L0,84 L34,52 L22,48 L0,66 L-22,48 Z', fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // collar
        E('circle', { cx: 0, cy: 92, r: 4, fill: SC_INK }, g); E('circle', { cx: 0, cy: 110, r: 4, fill: SC_INK }, g);
        const crest = G(g); tr(crest, 52, 108);
        E('path', { d: 'M-18,-16 L18,-16 L18,4 Q18,18 0,24 Q-18,18 -18,4 Z', fill: '#F2C14E', stroke: SC_INK, 'stroke-width': 2.5 }, crest);
        T(crest, 0, 6, 'BH', { size: 15, weight: 800, anchor: 'middle', fill: '#1E5A55' });
        E('rect', { x: -18, y: 30, width: 36, height: 28, fill: skin }, g);   // neck
        E('ellipse', { cx: 0, cy: -30, rx: 72, ry: 78, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-78,-20 Q-84,-112 0,-114 Q84,-112 78,-20 L66,-20 Q62,-58 54,-66 L-60,-66 Q-66,-50 -66,-20 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // fringe
        E('path', { d: 'M-40,-70 L-36,-100 M0,-68 L0,-104 M38,-70 L36,-100', stroke: '#3A2A26', 'stroke-width': 3, opacity: 0.6 }, g);
        E('rect', { x: 34, y: -86, width: 32, height: 12, rx: 6, fill: '#FFD23F', stroke: SC_INK, 'stroke-width': 2.5, transform: 'rotate(-18 50 -80)' }, g);   // hair clip
        E('ellipse', { cx: -48, cy: 2, rx: 11, ry: 6, fill: '#FF8FA0', opacity: 0.45 }, g);
        E('ellipse', { cx: 48, cy: 2, rx: 11, ry: 6, fill: '#FF8FA0', opacity: 0.45 }, g);
      },
      face: { x: 0, y: -22, eye: 14, gap: 50, mouthW: 34, mouthY: 32, lidCol: '#E2B48A' },
      sweat: [[-70, -70], [72, -64]],
      upd: (t, g, st) => {
        const h = st.hand || 0;
        op(hand, h > 0.02 ? 1 : 0);
        if (h > 0.02) hand.setAttribute('transform', `translate(0 ${((1 - h) * 120).toFixed(1)})`);
        const ph = st.phone || 0;
        if (!phone) return;   // scMake calls set() once before the phone exists
        op(phone, ph);
        if (ph > 0) tr(phone, -150 + 40 * (1 - ph), 40 + 30 * (1 - ph), 1, -8);
      } }));
    const inner = c.firstChild;
    const gl = G(inner); tr(gl, 0, -22);   // round red glasses over the eyes
    [-25, 25].forEach(x => E('circle', { cx: x, cy: 0, r: 23, fill: 'rgba(255,255,255,0.12)', stroke: '#D7303F', 'stroke-width': 4.5 }, gl));
    E('path', { d: 'M-3,-2 Q0,-6 3,-2', fill: 'none', stroke: '#D7303F', 'stroke-width': 4 }, gl);
    E('path', { d: 'M-48,-4 L-70,-10 M48,-4 L70,-10', stroke: '#D7303F', 'stroke-width': 4 }, gl);
    phone = G(inner);
    E('rect', { x: -46, y: -78, width: 92, height: 156, rx: 14, fill: '#1B2733', stroke: SC_INK, 'stroke-width': 4 }, phone);
    E('rect', { x: -38, y: -64, width: 76, height: 128, rx: 6, fill: '#F4F7FA' }, phone);
    c.phoneScreen = G(phone);
    E('rect', { x: -40, y: 30, width: 34, height: 54, rx: 14, fill: '#EDC39B', stroke: SC_INK, 'stroke-width': 3 }, phone);   // fingers
    op(phone, 0);
  } else if (kind === 'mrh') {
    let mug = null;
    c = scMake(parent, Object.assign(S, { seed: 5, bob: 1.5, mood: o.mood || 'deadpan',
      draw: g => {
        const skin = '#F1C7A8';
        E('path', { d: 'M-108,140 Q-104,58 -44,48 L44,48 Q104,58 108,140 Z', fill: '#8A6744', stroke: SC_INK, 'stroke-width': 4 }, g);   // tweed jacket
        let tw = ''; for (let k = 0; k < 9; k++) tw += `M${-96 + k * 24},${70 + (k % 2) * 8} l10,40 `;
        E('path', { d: tw, stroke: '#6E5034', 'stroke-width': 3, opacity: 0.7 }, g);
        E('path', { d: 'M-32,48 L0,140 L32,48 Z', fill: '#CFE3F2', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // shirt
        E('path', { d: 'M-10,58 L10,58 L16,120 L0,136 L-16,120 Z', fill: '#7A1E2E', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // tie, a bit loose
        E('path', { d: 'M-32,48 L-14,98 L-52,70 Z M32,48 L14,98 L52,70 Z', fill: '#76583A', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // lapels
        E('path', { d: 'M-40,52 L-58,130 M40,52 L58,130', stroke: '#2E7DD8', 'stroke-width': 5 }, g);   // lanyard
        E('rect', { x: 46, y: 112, width: 34, height: 26, rx: 4, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 2.5 }, g);
        E('rect', { x: 50, y: 116, width: 10, height: 12, fill: '#9AB4C4' }, g);
        E('rect', { x: -20, y: 26, width: 40, height: 30, fill: skin }, g);   // neck
        E('ellipse', { cx: -80, cy: -26, rx: 14, ry: 22, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);   // ears
        E('ellipse', { cx: 80, cy: -26, rx: 14, ry: 22, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('ellipse', { cx: 0, cy: -34, rx: 76, ry: 86, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-76,-30 Q-82,-78 -58,-92 Q-64,-60 -60,-30 Z M76,-30 Q82,-78 58,-92 Q64,-60 60,-30 Z', fill: '#B9B6B0', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // grey sides
        E('path', { d: 'M-66,-6 Q-70,52 0,58 Q70,52 66,-6 Q56,30 30,30 Q0,22 -30,30 Q-56,30 -66,-6 Z', fill: '#C9C5BE', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, g);   // beard
        E('path', { d: 'M-30,-96 Q-10,-110 26,-100', fill: 'none', stroke: '#E0B090', 'stroke-width': 5, 'stroke-linecap': 'round', opacity: 0.7 }, g);   // shine
        const gl = G(g); tr(gl, 0, -86);   // reading glasses pushed up on his head
        E('rect', { x: -52, y: -14, width: 42, height: 26, rx: 8, fill: 'rgba(255,255,255,0.25)', stroke: '#3A2A20', 'stroke-width': 4 }, gl);
        E('rect', { x: 10, y: -14, width: 42, height: 26, rx: 8, fill: 'rgba(255,255,255,0.25)', stroke: '#3A2A20', 'stroke-width': 4 }, gl);
        E('path', { d: 'M-10,-2 Q0,-8 10,-2', fill: 'none', stroke: '#3A2A20', 'stroke-width': 4 }, gl);
        E('path', { d: 'M-40,-6 Q-27,0 -14,-6 M14,-6 Q27,0 40,-6', fill: 'none', stroke: '#C98E78', 'stroke-width': 3, opacity: 0.8 }, g);   // eye bags
      },
      face: { x: 0, y: -28, eye: 14, gap: 54, mouthW: 36, mouthY: 40, lidCol: '#E4B496' },
      sweat: [[-66, -84], [70, -78]],
      upd: (t, g, st) => {
        const m = st.mug || 0; if (!mug) return; op(mug, m);
        if (m > 0) { tr(mug, 112, 92 + 30 * (1 - m), 0.62); mug.upd(t); }
      } }));
    mug = engMug(c.firstChild, 1); op(mug, 0);
  } else if (kind === 'will') {
    let quill = null, halo = null, tail = null;
    c = scMake(parent, Object.assign(S, { seed: 19, bob: 7, mood: o.mood || 'neutral',
      draw: g => {
        halo = E('ellipse', { cx: 0, cy: -10, rx: 170, ry: 200, fill: glow('#9FD8FF'), opacity: 0.45 }, g);
        const body = G(g, { opacity: 0.9 });
        tail = E('path', { d: '', fill: '#C7DCF8', stroke: '#7FA6D9', 'stroke-width': 4, 'stroke-linejoin': 'round' }, body);
        E('path', { d: 'M-86,132 Q-92,64 -40,50 L40,50 Q92,64 86,132 Z', fill: '#AFC7EA', stroke: '#5E86BF', 'stroke-width': 4 }, body);   // doublet
        for (let k = 0; k < 3; k++) E('circle', { cx: 0, cy: 76 + k * 20, r: 5, fill: '#E2B33C', stroke: '#9C7A1E', 'stroke-width': 1.5 }, body);
        E('path', { d: 'M-60,80 L-68,128 M60,80 L68,128', stroke: '#8EAEDB', 'stroke-width': 4 }, body);
        // ruff: a pleated white collar
        E('ellipse', { cx: 0, cy: 46, rx: 84, ry: 24, fill: '#FFFFFF', stroke: '#7FA6D9', 'stroke-width': 4 }, body);
        E('path', { d: 'M-80,46 Q-60,30 -40,46 Q-20,30 0,46 Q20,30 40,46 Q60,30 80,46', fill: 'none', stroke: '#B8CCE6', 'stroke-width': 3 }, body);
        E('path', { d: 'M-80,48 Q-60,62 -40,48 Q-20,62 0,48 Q20,62 40,48 Q60,62 80,48', fill: 'none', stroke: '#B8CCE6', 'stroke-width': 3 }, body);
        E('ellipse', { cx: -66, cy: -52, rx: 12, ry: 20, fill: '#E7F0FF', stroke: '#7FA6D9', 'stroke-width': 4 }, body);   // ears
        E('ellipse', { cx: 66, cy: -52, rx: 12, ry: 20, fill: '#E7F0FF', stroke: '#7FA6D9', 'stroke-width': 4 }, body);
        E('circle', { cx: 70, cy: -30, r: 8, fill: 'none', stroke: '#E2B33C', 'stroke-width': 4 }, body);   // gold hoop earring
        E('path', { d: 'M-62,-60 Q-66,-142 0,-148 Q66,-142 62,-60 Q64,-10 40,20 Q0,40 -40,20 Q-64,-10 -62,-60 Z', fill: '#EAF2FF', stroke: '#7FA6D9', 'stroke-width': 4 }, body);   // head, high domed forehead
        E('path', { d: 'M-60,-74 Q-84,-40 -78,10 Q-70,30 -56,36 Q-62,0 -58,-50 Z M60,-74 Q84,-40 78,10 Q70,30 56,36 Q62,0 58,-50 Z', fill: '#B9A58E', stroke: '#7FA6D9', 'stroke-width': 3, 'stroke-linejoin': 'round' }, body);   // hair at the sides
        E('path', { d: 'M-22,-128 Q0,-138 24,-126', fill: 'none', stroke: '#FFFFFF', 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0.8 }, body);
        E('path', { d: 'M-14,24 Q0,30 14,24 L6,56 L0,64 L-6,56 Z', fill: '#B9A58E', stroke: '#7FA6D9', 'stroke-width': 3, 'stroke-linejoin': 'round' }, body);   // pointed beard
        quill = engQuill(g, 0.8); op(quill, 0);
      },
      face: { x: 0, y: -50, eye: 14, gap: 46, mouthW: 30, mouthY: 48, lidCol: '#C9DAF2', iris: '#25365E' },
      upd: (t, g, st) => {
        const gl = st.glow || 0;
        attr(halo, 'opacity', 0.38 + 0.12 * Math.sin(t * 2.2) + 0.4 * gl);
        const w = Math.sin(t * 3.1) * 14, w2 = Math.cos(t * 2.3) * 10;
        tail.setAttribute('d', `M-74,126 Q${(-50 + w).toFixed(1)},170 ${(-10 + w2).toFixed(1)},180 Q${(30 + w).toFixed(1)},188 ${(16 - w2).toFixed(1)},206 Q${(70 + w).toFixed(1)},176 74,126 Z`);
        const q = st.quill || 0; op(quill, q);
        if (q > 0) tr(quill, 120, 40 - 30 * q, 0.8, -20 + Math.sin(t * 4) * 6);
      } }));
    // the moustache sits over the face, above the mouth
    const mo = G(c.firstChild); tr(mo, 0, -20);
    E('path', { d: 'M-2,0 C-12,-10 -32,-8 -40,4 C-30,0 -18,6 -2,4 Z M2,0 C12,-10 32,-8 40,4 C30,0 18,6 2,4 Z', fill: '#B9A58E', stroke: '#7FA6D9', 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, mo);
  } else if (kind === 'nib') {
    let blot = null, drop = null;
    c = scMake(parent, Object.assign(S, { seed: 23, bob: 3, mood: o.mood || 'smug',
      draw: g => {
        blot = E('path', { d: 'M0,0 C30,-14 64,-6 70,10 C84,20 60,36 34,32 C16,44 -20,40 -36,30 C-70,30 -76,10 -56,0 C-50,-12 -20,-10 0,0 Z', fill: '#1A1440' }, g); tr(blot, 0, 178, 0.01);
        drop = E('path', { d: 'M0,-12 Q9,2 0,8 Q-9,2 0,-12 Z', fill: '#1A1440' }, g);
        E('path', { d: 'M-30,92 L30,92 L22,124 L-22,124 Z', fill: '#1E1E26', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);   // grip section
        E('path', { d: 'M-22,122 L22,122 Q24,140 0,176 Q-24,140 -22,122 Z', fill: ball('#F2CF63', '#A87C14'), stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);   // gold nib
        E('path', { d: 'M0,140 L0,174', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('circle', { cx: 0, cy: 138, r: 4, fill: SC_INK }, g);
        E('rect', { x: -46, y: -150, width: 92, height: 244, rx: 40, fill: linGrad('#9E2C4E', '#5A1028', false), stroke: SC_INK, 'stroke-width': 5 }, g);   // barrel
        E('path', { d: 'M-30,-130 Q-34,-20 -30,80', fill: 'none', stroke: '#E07A9A', 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0.45 }, g);   // shine
        [[-108, 12], [70, 10]].forEach(([y, h]) => E('rect', { x: -46, y, width: 92, height: h, fill: ball('#F2CF63', '#A87C14'), stroke: SC_INK, 'stroke-width': 3 }, g));   // gold bands
        E('path', { d: 'M40,-140 L58,-140 Q62,-140 62,-134 L62,0 Q62,10 54,12 L48,12 L48,-130', fill: ball('#F2CF63', '#A87C14'), stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);   // clip
        E('ellipse', { cx: 0, cy: -150, rx: 30, ry: 8, fill: '#C9A13C', stroke: SC_INK, 'stroke-width': 3 }, g);
      },
      face: { x: -4, y: -46, eye: 13, gap: 40, mouthW: 26, mouthY: 56, lidCol: '#8A2446' },
      upd: (t, g, st) => {
        const k = st.ink || 0;
        tr(blot, 0, 178, Math.max(0.01, k * (1 + 0.04 * Math.sin(t * 3))));
        op(blot, k > 0.01 ? 1 : 0);
        const f = (t * 0.9) % 1; op(drop, k > 0.05 ? 1 - f : 0); tr(drop, 0, 180 + f * 4);
      } }));
    const inner = c.firstChild;
    const mo = G(inner); tr(mo, -4, -14);   // curly black moustache
    E('path', { d: 'M-2,0 C-10,-10 -26,-10 -30,0 C-34,8 -24,12 -22,4 C-16,10 -8,8 -2,4 Z M2,0 C10,-10 26,-10 30,0 C34,8 24,12 22,4 C16,10 8,8 2,4 Z', fill: '#1A1214', stroke: SC_INK, 'stroke-width': 2 }, mo);
    const mon = G(inner); tr(mon, -24, -46);   // monocle on his right eye (our left) and its chain
    E('circle', { r: 21, fill: 'rgba(255,255,255,0.15)', stroke: '#E2B33C', 'stroke-width': 5 }, mon);
    E('path', { d: 'M-16,14 Q-30,60 -10,110', fill: 'none', stroke: '#E2B33C', 'stroke-width': 3, 'stroke-dasharray': '4 3' }, mon);
  } else if (kind === 'kevin') {
    let bag = null, arms = [];
    c = scMake(parent, Object.assign(S, { seed: 29, bob: 5, mood: o.mood || 'neutral',
      draw: g => {
        [-1, 1].forEach(sd => arms.push({ sd, a: E('path', { d: '', fill: 'none', stroke: SC_INK, 'stroke-width': 9, 'stroke-linecap': 'round' }, g) }));
        E('path', { d: 'M40,40 Q60,110 20,170 Q-10,200 -46,196 Q-10,170 -4,120 Q-2,90 -10,70 Z', fill: ball('#4A4FB8', '#23266B'), stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);   // the tail
        E('circle', { cx: 0, cy: -20, r: 92, fill: ball('#4A4FB8', '#23266B'), stroke: SC_INK, 'stroke-width': 5 }, g);   // the dot
        E('ellipse', { cx: -38, cy: -70, rx: 22, ry: 12, fill: '#FFFFFF', opacity: 0.25, transform: 'rotate(-30 -38 -70)' }, g);
        bag = G(g);
        E('path', { d: 'M-34,0 L34,0 L40,70 L-40,70 Z', fill: '#C9A06A', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, bag);
        E('path', { d: 'M-34,0 L-28,8 L-20,0 L-12,8 L-4,0 L4,8 L12,0 L20,8 L28,0 L34,0', fill: 'none', stroke: '#8A6A3A', 'stroke-width': 3 }, bag);
      },
      face: { x: 0, y: -30, eye: 18, gap: 56, mouthW: 34, mouthY: 40, lidCol: '#3A3F95' },
      sweat: [[-84, -80], [86, -70], [-96, -10]],
      upd: (t, g, st) => {
        const b = st.bag || 0;
        op(bag, b);
        if (b > 0) { const puff = 1 + 0.22 * Math.max(0, Math.sin(t * TAU * 1.4)); bag.setAttribute('transform', `translate(0 ${(16 + 40 * (1 - b)).toFixed(1)}) scale(${puff.toFixed(3)} 1)`); }
        arms.forEach(({ sd, a }) => {
          const w = b > 0 ? 0 : Math.sin(t * TAU * 1.8 + sd) * 8;
          a.setAttribute('d', b > 0 ? `M${sd * 80},30 Q${sd * 80},70 ${sd * 38},40` : `M${sd * 86},20 Q${sd * 112},40 ${sd * 116},${(64 + w).toFixed(1)}`);
        });
      } }));
  } else throw new Error('engCast: unknown kind ' + kind);
  return c;
}

/* Mei, full body (kit person in uniform), feet at (0,0) */
function engMeiBody(parent) {
  const p = person(parent, { skin: '#EDC39B', shirt: '#2BA39A', shorts: '#1E3A5A', hair: '#17100E', shoes: '#1B2733' });
  const body = p.firstChild, head = body.lastChild;
  E('path', { d: 'M-21,-180 Q-24,-160 -18,-150 L18,-150 Q24,-160 21,-180 Z', fill: '#17100E' }, head);   // bob
  E('path', { d: 'M-19,-182 Q-18,-198 0,-197 Q18,-198 19,-182 Q10,-188 -19,-182 Z', fill: '#17100E' }, head);
  E('circle', { cx: 7, cy: -174, r: 6, fill: 'none', stroke: '#D7303F', 'stroke-width': 2 }, head);   // glasses
  E('circle', { cx: -7, cy: -174, r: 6, fill: 'none', stroke: '#D7303F', 'stroke-width': 2 }, head);
  return p;
}

/* ---------- props ---------- */
function engMug(parent, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  const steam = [];
  for (let k = 0; k < 3; k++) steam.push(E('path', { d: '', fill: 'none', stroke: '#FFFFFF', 'stroke-width': 5, 'stroke-linecap': 'round', opacity: 0.6 }, i));
  E('path', { d: 'M46,-30 Q84,-30 80,4 Q76,34 44,30', fill: 'none', stroke: SC_INK, 'stroke-width': 16 }, i);
  E('path', { d: 'M46,-30 Q84,-30 80,4 Q76,34 44,30', fill: 'none', stroke: '#FFFFFF', 'stroke-width': 9 }, i);
  E('path', { d: 'M-52,-56 L52,-56 L46,56 Q46,64 38,64 L-38,64 Q-46,64 -46,56 Z', fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, i);
  E('ellipse', { cx: 0, cy: -56, rx: 52, ry: 10, fill: '#B07A45', stroke: SC_INK, 'stroke-width': 4 }, i);
  T(i, 0, -14, 'TO TEA', { size: 19, weight: 800, anchor: 'middle', fill: '#7A1E2E' });
  T(i, 0, 10, 'OR NOT', { size: 19, weight: 800, anchor: 'middle', fill: SC_INK });
  T(i, 0, 34, 'TO TEA', { size: 19, weight: 800, anchor: 'middle', fill: '#7A1E2E' });
  g.upd = t => steam.forEach((e, k) => {
    const f = (t * 0.5 + k / 3) % 1, x = -24 + k * 24;
    e.setAttribute('d', `M${x},${-66 - f * 50} q10,-12 0,-24 q-10,-12 0,-24`); e.style.opacity = (0.6 * Math.sin(f * Math.PI)).toFixed(3);
  });
  g.upd(0);
  return g;
}
function engQuill(parent, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  E('path', { d: 'M0,0 C30,-40 90,-120 160,-150 C150,-110 120,-60 70,-30 C50,-18 24,-6 0,0 Z', fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, i);
  E('path', { d: 'M4,-2 C40,-40 100,-110 156,-146', fill: 'none', stroke: '#9AA6B2', 'stroke-width': 3 }, i);
  let barbs = ''; for (let k = 1; k < 8; k++) { const x = 18 * k, y = -18 * k * 0.95; barbs += `M${x},${y} l${10 + k},${8 - k} `; }
  E('path', { d: barbs, stroke: '#C9D3DC', 'stroke-width': 2 }, i);
  E('path', { d: 'M0,0 L-14,10 L-4,-4 Z', fill: '#1A1440', stroke: SC_INK, 'stroke-width': 2 }, i);
  return g;
}
function engSkull(parent, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  E('path', { d: 'M-56,10 Q-62,-62 0,-66 Q62,-62 56,10 Q54,30 36,36 L34,56 L-34,56 L-36,36 Q-54,30 -56,10 Z', fill: ball('#F4EEDC', '#B8AE90'), stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, i);
  E('ellipse', { cx: -22, cy: -6, rx: 15, ry: 17, fill: SC_INK }, i);
  E('ellipse', { cx: 22, cy: -6, rx: 15, ry: 17, fill: SC_INK }, i);
  E('path', { d: 'M0,14 L-7,28 L7,28 Z', fill: SC_INK }, i);
  E('path', { d: 'M-24,44 L-24,56 M-8,44 L-8,56 M8,44 L8,56 M24,44 L24,56', stroke: SC_INK, 'stroke-width': 3 }, i);
  return g;
}
function engMasks(parent, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  const mask = (x, rot, col, dk, happy) => {
    const m = G(i); tr(m, x, 0, 1, rot);
    E('path', { d: 'M-56,-60 Q0,-80 56,-60 Q64,10 30,58 Q0,76 -30,58 Q-64,10 -56,-60 Z', fill: ball(col, dk), stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, m);
    E('path', { d: happy ? 'M-34,-20 Q-20,-34 -8,-20 M8,-20 Q20,-34 34,-20' : 'M-34,-26 Q-20,-12 -8,-26 M8,-26 Q20,-12 34,-26', fill: 'none', stroke: SC_INK, 'stroke-width': 6, 'stroke-linecap': 'round' }, m);
    E('path', { d: happy ? 'M-26,16 Q0,44 26,16 Z' : 'M-24,36 Q0,10 24,36 Z', fill: SC_INK }, m);
  };
  mask(-50, -14, '#FFD23F', '#C99A12', true);
  mask(50, 14, '#9FC3FF', '#4C7BC8', false);
  return g;
}
function engBook(parent, title, col, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  col = col || '#7A1E2E';
  E('rect', { x: -70, y: -100, width: 150, height: 200, rx: 8, fill: '#F4EBD3', stroke: SC_INK, 'stroke-width': 4 }, i);
  E('rect', { x: -78, y: -104, width: 148, height: 204, rx: 8, fill: col, stroke: SC_INK, 'stroke-width': 5 }, i);
  E('rect', { x: -78, y: -104, width: 22, height: 204, rx: 6, fill: '#000000', opacity: 0.22 }, i);
  E('rect', { x: -48, y: -76, width: 98, height: 70, rx: 6, fill: 'none', stroke: '#E2B33C', 'stroke-width': 3 }, i);
  const lines = String(title || '').split('\n');
  lines.forEach((l, k) => T(i, 1, -48 + k * 26 - (lines.length - 1) * 8, l, { size: 22, weight: 800, anchor: 'middle', fill: '#F2E0A8' }));
  return g;
}
function engScroll(parent, w, h) {
  const g = G(parent);
  E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, fill: ENG.parch, stroke: ENG.parchEdge, 'stroke-width': 4 }, g);
  [-1, 1].forEach(sd => {
    E('rect', { x: -w / 2 - 14, y: sd * h / 2 - 16, width: w + 28, height: 32, rx: 16, fill: linGrad('#E9D9B0', '#B89A5E', true), stroke: ENG.parchEdge, 'stroke-width': 4 }, g);
    E('circle', { cx: -w / 2 - 14, cy: sd * h / 2, r: 10, fill: '#8B5A2B' }, g);
    E('circle', { cx: w / 2 + 14, cy: sd * h / 2, r: 10, fill: '#8B5A2B' }, g);
  });
  g.body = G(g);
  return g;
}
function engPaper(parent, w, h, o) {
  o = o || {};
  const g = G(parent);
  E('rect', { x: -w / 2 + 8, y: -h / 2 + 10, width: w, height: h, rx: 6, fill: '#000000', opacity: 0.25 }, g);
  E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 6, fill: '#FFFDF6', stroke: '#C9C2AE', 'stroke-width': 3 }, g);
  if (o.title) T(g, 0, -h / 2 + 46, o.title, { size: 28, weight: 800, anchor: 'middle', fill: '#7A1E2E', ls: 1 });
  return g;
}
function engPhone(parent, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  E('rect', { x: -90, y: -160, width: 180, height: 320, rx: 26, fill: '#1B2733', stroke: SC_INK, 'stroke-width': 5 }, i);
  E('rect', { x: -76, y: -128, width: 152, height: 256, rx: 8, fill: '#F4F7FA' }, i);
  E('rect', { x: -24, y: -148, width: 48, height: 8, rx: 4, fill: '#3A4B5C' }, i);
  g.screen = G(i);
  return g;
}
function engStars(parent, o) {
  o = o || {};
  const g = G(parent), size = o.size || 44, gap = size * 1.18, stars = [];
  const pts = []; for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? size * 0.21 : size * 0.5; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
  const d = 'M' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L') + 'Z';
  for (let k = 0; k < 5; k++) {
    const s = G(g); tr(s, (k - 2) * gap, 0);
    E('path', { d, fill: '#3A4B5C', stroke: '#1B2733', 'stroke-width': 3, 'stroke-linejoin': 'round' }, s);
    const on = E('path', { d, fill: '#FFD23F', stroke: '#B57B12', 'stroke-width': 3, 'stroke-linejoin': 'round' }, s);
    stars.push(on);
  }
  g.w = gap * 4 + size;
  g.set = n => stars.forEach((s, k) => { const p = clamp(n - k); op(s, p > 0 ? 1 : 0); if (p > 0) s.setAttribute('transform', `scale(${(p < 1 ? pop(p) : 1).toFixed(3)})`); });
  g.set(0);
  return g;
}
function engReview(parent, o) {
  o = o || {};
  const w = o.w || 520, g = G(parent);
  const lines = engWrap(o.text || '', 30, w - 60, FB, 700);
  const h = 130 + lines.length * 38 + 50;
  E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 18, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 4 }, g);
  const st = engStars(g, { size: 48 }); tr(st, 0, -h / 2 + 52);
  lines.forEach((l, k) => T(g, 0, -h / 2 + 128 + k * 38, (k === 0 ? '“' : '') + l + (k === lines.length - 1 ? '”' : ''), { size: 30, weight: 700, anchor: 'middle', fill: SC_INK, font: FB }));
  if (o.by) T(g, 0, h / 2 - 26, '— ' + o.by, { size: 24, weight: 700, anchor: 'middle', fill: '#5A6B7A', font: FB });
  g.set = n => st.set(n);
  g.set(o.stars || 0);
  g.w = w; g.h = h;
  return g;
}
function engBubble(parent, text, o) {
  o = o || {};
  const size = o.size || 32, g = G(parent);
  const lines = String(text).split('\n');
  const w = o.w || Math.max(...lines.map(l => textWidth(l, size, FD, 700))) + 56, h = lines.length * size * 1.25 + 34;
  const tail = o.tail || 'down';
  let d = `M${-w / 2 + 20},${-h / 2} L${w / 2 - 20},${-h / 2} Q${w / 2},${-h / 2} ${w / 2},${-h / 2 + 20} L${w / 2},${h / 2 - 20} Q${w / 2},${h / 2} ${w / 2 - 20},${h / 2} `;
  if (tail === 'down') d += `L10,${h / 2} L-24,${h / 2 + 34} L-20,${h / 2} `;
  d += `L${-w / 2 + 20},${h / 2} Q${-w / 2},${h / 2} ${-w / 2},${h / 2 - 20} `;
  if (tail === 'left') d += `L${-w / 2},12 L${-w / 2 - 36},24 L${-w / 2},-8 `;
  d += `L${-w / 2},${-h / 2 + 20} Q${-w / 2},${-h / 2} ${-w / 2 + 20},${-h / 2} Z`;
  if (tail === 'right') d = d.replace(`L${w / 2},${h / 2 - 20}`, `L${w / 2},-8 L${w / 2 + 36},24 L${w / 2},12 L${w / 2},${h / 2 - 20}`);
  E('path', { d, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
  lines.forEach((l, k) => T(g, 0, -h / 2 + 17 + size * 0.95 + k * size * 1.25, l, { size, weight: 700, anchor: 'middle', fill: SC_INK, boldFill: '#B8335A' }));
  g.w = w; g.h = h;
  return g;
}
function engStamp(parent, text, col) {
  col = col || '#D32F2F';
  const g = G(parent), inner = G(g);
  const w = textWidth(text, 60, FD, 800) + 64;
  E('rect', { x: -w / 2, y: -48, width: w, height: 96, rx: 12, fill: 'rgba(255,255,255,0.08)', stroke: col, 'stroke-width': 9 }, inner);
  E('rect', { x: -w / 2 + 10, y: -38, width: w - 20, height: 76, rx: 8, fill: 'none', stroke: col, 'stroke-width': 3 }, inner);
  T(inner, 0, 21, text, { size: 60, weight: 800, anchor: 'middle', fill: col, ls: 3 });
  g.w = w;
  g.set = p => { p = clamp(p); op(g, p > 0 ? 1 : 0); const k = p < 0.6 ? lerp(2.2, 0.92, p / 0.6) : lerp(0.92, 1, (p - 0.6) / 0.4); tr(inner, 0, 0, k, -8); inner.style.opacity = clamp(p * 3).toFixed(3); };
  g.set(1);
  return g;
}
function engCard(parent, text, o) {
  o = o || {};
  const w = o.w || 620, size = o.size || 32, padL = o.icon ? 86 : 40;
  const lines = engWrap(text, size, w - padL - 36, FD, 700);
  const h = Math.max(o.minH || 0, lines.length * size * 1.25 + 48);
  const g = G(parent);
  E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 22, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.gold, 'stroke-width': 4 }, g);
  lines.forEach((l, k) => T(g, -w / 2 + padL, -h / 2 + 24 + size * 0.95 + k * size * 1.25, l, { size, weight: 700, fill: o.color || '#FFFFFF', boldFill: o.boldFill || ENG.gold }));
  if (o.icon) tr(o.icon === 'tick' ? tick(g, 18) : cross(g, 15), -w / 2 + 46, 0);
  if (o.tab) { const tb = chip(g, o.tab, { size: 26, fill: o.tabCol || '#C62828', color: '#FFFFFF', stroke: '#FFFFFF', sw: 3 }); tr(tb, -w / 2 + 30 + tb.w / 2, -h / 2, 1, -3); }
  g.w = w; g.h = h;
  return g;
}

/* ---------- English on screen: quote card, technique chip, PEEL ladder, scansion ---------- */
function engQuote(parent, o) {
  o = o || {};
  const w = o.w || 760, size = o.size || 40, g = G(parent), inner = G(g);
  const lines = engWrap(o.text || '', size, w - 156, FD, 600);
  const lh = size * 1.3, by = (o.who || o.where) ? 64 : 10;
  const h = lines.length * lh + 70 + by;
  E('rect', { x: -w / 2 + 8, y: -h / 2 + 10, width: w, height: h, rx: 18, fill: '#000000', opacity: 0.28 }, inner);
  E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 18, fill: ENG.parch, stroke: ENG.parchEdge, 'stroke-width': 4 }, inner);
  E('rect', { x: -w / 2, y: -h / 2, width: 14, height: h, rx: 7, fill: ENG.rose }, inner);
  const marks = G(inner);   // highlighter strokes sit behind the words
  const q1 = T(inner, -w / 2 + 34, -h / 2 + 78, '“', { size: 110, weight: 700, fill: ENG.rose }); q1.setAttribute('opacity', 0.9);
  const y0 = -h / 2 + 40 + size * 0.95;
  const words = [];
  lines.forEach((l, k) => {
    const y = y0 + k * lh, x0 = -w / 2 + 84;
    T(inner, x0, y, l, { size, weight: 600, fill: ENG.ink, boldFill: ENG.roseDk });
    // remember each word's box for highlighting
    const plain = l.replace(/\*\*/g, ''), parts = plain.split(' ');
    let acc = '';
    parts.forEach((p, i) => {
      const pre = acc + (i ? ' ' : ''), xs = x0 + (pre ? textWidth(pre, size, FD, 600) : 0), ww = textWidth(p, size, FD, 600);
      words.push({ word: p.toLowerCase().replace(/[^a-z']/g, ''), x: xs, y, w: ww });
      acc = pre + p;
    });
  });
  const lastW = words[words.length - 1];
  if (lastW) T(inner, lastW.x + lastW.w + 6, lastW.y + size * 0.62, '”', { size: 76, weight: 700, fill: ENG.rose });
  if (o.who || o.where) {
    const yb = h / 2 - 30;
    E('line', { x1: -w / 2 + 84, y1: yb - 42, x2: w / 2 - 40, y2: yb - 42, stroke: ENG.parchEdge, 'stroke-width': 2 }, inner);
    T(inner, -w / 2 + 84, yb, (o.who ? `**${o.who.toUpperCase()}**` : '') + (o.who && o.where ? '  ·  ' : '') + (o.where || ''), { size: 26, weight: 600, fill: '#7A5A2A', boldFill: ENG.roseDk, font: FB });
  }
  const hl = (o.hl || []).map(word => {
    const key = word.toLowerCase().replace(/[^a-z']/g, '');
    const wd = words.find(x => x.word === key) || words[0];
    const r = E('rect', { x: wd.x - 6, y: wd.y - size * 0.82, width: 0, height: size * 1.05, rx: 6, fill: '#FFE45C', opacity: 0.85 }, marks);
    return { r, wd };
  });
  g.w = w; g.h = h;
  g.set = p => { p = clamp(p); op(g, p > 0.002 ? 1 : 0); tr(inner, 0, 0, Math.max(0.01, 0.7 + 0.3 * pop(p))); inner.style.opacity = clamp(p * 3).toFixed(3); };
  g.mark = (k, p) => hl.forEach((h_, i) => { if (k === -1 || k === i) attr(h_.r, 'width', (h_.wd.w + 12) * clamp(p)); });
  g.wordXY = k => { const h_ = hl[k]; return h_ ? [h_.wd.x + h_.wd.w / 2, h_.wd.y - size * 0.3] : [0, 0]; };
  g.set(1);
  return g;
}
function engTech(parent, label, o) {
  o = o || {};
  const size = o.size || 34, col = ENG_TECH[o.kind] || ENG_TECH.language;
  const g = G(parent), inner = G(g);
  const tw = textWidth(label, size, FD, 800), w = o.w || Math.max(tw + 110, o.def ? textWidth(o.def, size * 0.72, FB, 700) + 60 : 0);
  const h = size * 1.7;
  // luggage tag: a rounded label with a clipped corner and a hole
  E('path', { d: `M${-w / 2 + 26},${-h / 2} L${w / 2 - 14},${-h / 2} Q${w / 2},${-h / 2} ${w / 2},${-h / 2 + 14} L${w / 2},${h / 2 - 14} Q${w / 2},${h / 2} ${w / 2 - 14},${h / 2} L${-w / 2 + 26},${h / 2} L${-w / 2},${h / 2 - 26} L${-w / 2},${-h / 2 + 26} Z`,
    fill: col, stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, inner);
  E('circle', { cx: -w / 2 + 30, cy: 0, r: 9, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3 }, inner);
  T(inner, 22, size * 0.36, label, { size, weight: 800, anchor: 'middle', fill: SC_INK, ls: 1 });
  if (o.def) {
    const ds = size * 0.72;
    E('rect', { x: -w / 2 + 14, y: h / 2 + 6, width: w - 28, height: ds * 1.6, rx: 10, fill: 'rgba(10,20,34,0.92)', stroke: col, 'stroke-width': 3 }, inner);
    T(inner, 0, h / 2 + 6 + ds * 1.12, o.def, { size: ds, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  }
  g.w = w; g.h = h + (o.def ? size * 1.2 : 0);
  g.set = p => { p = clamp(p); op(g, p > 0.002 ? 1 : 0); tr(inner, 0, 0, Math.max(0.01, 0.6 + 0.4 * pop(p)), (1 - p) * -18 + Math.sin(p * 9) * (1 - p) * 6); };
  g.set(1);
  return g;
}
function engPeel(parent, rows, o) {
  o = o || {};
  const w = o.w || 680, size = o.size || 26, g = G(parent);
  const KEYS = [['P', 'POINT', '#F06A8A'], ['E', 'EVIDENCE', '#FFB547'], ['E', 'EXPLAIN', '#56D69B'], ['L', 'LINK', '#5AB4E0']];
  const top = o.title ? 60 : 0;
  if (o.title) T(g, 0, 36, o.title, { size: 34, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  const rh = rows.map(r => Math.max(1, engWrap(r, size, w - 210, FD, 600).length) * size * 1.25 + 34);
  const H_ = rh.reduce((a, b) => a + b + 18, 0) + 20;
  // the ladder's rails
  E('rect', { x: -w / 2 + 14, y: top, width: 14, height: H_, rx: 7, fill: '#B07A45', stroke: SC_INK, 'stroke-width': 3 }, g);
  E('rect', { x: -w / 2 + 110, y: top, width: 14, height: H_, rx: 7, fill: '#B07A45', stroke: SC_INK, 'stroke-width': 3 }, g);
  const rungs = []; let y = top + 14;
  rows.forEach((r, k) => {
    const rg = G(g); tr(rg, 0, y);
    E('rect', { x: -w / 2, y: rh[k] / 2 - 8, width: 140, height: 16, rx: 6, fill: '#D9A066', stroke: SC_INK, 'stroke-width': 3 }, rg);
    const [L, name, col] = KEYS[k] || KEYS[3];
    E('rect', { x: -w / 2 + 34, y: rh[k] / 2 - 36, width: 72, height: 72, rx: 14, fill: col, stroke: SC_INK, 'stroke-width': 4 }, rg);
    T(rg, -w / 2 + 70, rh[k] / 2 + 15, L, { size: 44, weight: 800, anchor: 'middle', fill: SC_INK });
    E('rect', { x: -w / 2 + 150, y: 0, width: w - 150, height: rh[k], rx: 14, fill: 'rgba(255,255,255,0.96)', stroke: col, 'stroke-width': 4 }, rg);
    T(rg, -w / 2 + 170, 26, name, { size: 18, weight: 800, fill: col === '#FFB547' ? '#B57B12' : col === '#56D69B' ? '#1E8A55' : col, ls: 2, font: FB });
    engWrap(r, size, w - 210, FD, 600).forEach((l, i) => T(rg, -w / 2 + 170, 30 + size * 0.95 + i * size * 1.25, l, { size, weight: 600, fill: SC_INK, boldFill: '#B8335A' }));
    rungs.push({ rg, y });
    y += rh[k] + 18;
  });
  g.h = top + H_;
  g.set = n => rungs.forEach(({ rg, y: yy }, k) => { const p = clamp(n - k); op(rg, p > 0 ? 1 : 0); if (p > 0) rg.setAttribute('transform', `translate(${(-30 * (1 - easeOut(p))).toFixed(1)} ${yy})`); });
  g.set(0);
  return g;
}
function engScan(parent, sylls, o) {
  o = o || {};
  const stress = (o.stress || 'u/'.repeat(Math.ceil(sylls.length / 2))).slice(0, sylls.length);
  let size = o.size || 40;
  const maxW = o.maxW || 1040, gap = size * 0.5;
  const width = sz => sylls.reduce((a, s) => a + textWidth(s, sz, FD, 800) + sz * 0.5, 0) - sz * 0.5;
  while (width(size) > maxW && size > 22) size -= 2;
  const g = G(parent), row = G(g);
  const total = width(size);
  let x = -total / 2;
  const items = sylls.map((s, i) => {
    const sw = textWidth(s, size, FD, 800), st = stress[i] === '/';
    const it = G(row); tr(it, x + sw / 2, 0);
    const box = E('rect', { x: -sw / 2 - 8, y: -size * 0.95, width: sw + 16, height: size * 1.3, rx: 10, fill: st ? 'rgba(240,106,138,0.25)' : 'rgba(255,255,255,0.08)', stroke: st ? ENG.rose : 'rgba(255,255,255,0.25)', 'stroke-width': 2 }, it);
    const tx = T(it, 0, 0, s, { size, weight: st ? 800 : 600, anchor: 'middle', fill: st ? '#FFFFFF' : '#C9D6E2' });
    const mk = G(it); tr(mk, 0, -size * 1.35);
    if (st) E('path', { d: 'M-7,10 L7,-12', stroke: ENG.rose, 'stroke-width': 7, 'stroke-linecap': 'round' }, mk);
    else E('path', { d: 'M-10,-8 Q0,8 10,-8', fill: 'none', stroke: '#C9D6E2', 'stroke-width': 5, 'stroke-linecap': 'round' }, mk);
    const item = { it, box, tx, mk, cx: x + sw / 2, w: sw, st };
    x += sw + gap;
    return item;
  });
  // feet: brackets under each pair of syllables, numbered
  const feet = G(g), nFeet = Math.floor(sylls.length / 2), feetEls = [];
  for (let k = 0; k < nFeet; k++) {
    const a = items[2 * k], b = items[2 * k + 1];
    const x1 = a.cx - a.w / 2 - 6, x2 = b.cx + b.w / 2 + 6, yy = size * 0.62;
    const f = G(feet);
    E('path', { d: `M${x1},${yy} L${x1},${yy + 14} L${x2},${yy + 14} L${x2},${yy}`, fill: 'none', stroke: ENG.gold, 'stroke-width': 4, 'stroke-linejoin': 'round' }, f);
    T(f, (x1 + x2) / 2, yy + 50, String(k + 1), { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold });
    feetEls.push(f);
  }
  const ballG = G(g);
  E('circle', { r: size * 0.26, fill: ball('#FFE45C', '#D49A12'), stroke: SC_INK, 'stroke-width': 2 }, ballG);
  g.n = sylls.length; g.size = size; g.items = items; g.width = total;
  g.set = p => items.forEach((it, i) => { const q = clamp(p * sylls.length - i); op(it.it, q > 0 ? clamp(q * 2) : 0); });
  g.marks = p => items.forEach((it, i) => op(it.mk, clamp(p * sylls.length - i)));
  g.feet = p => feetEls.forEach((f, k) => op(f, clamp(p * nFeet - k)));
  g.hit = (i, v) => { const it = items[i]; if (it) tr(it.tx, 0, -v * size * 0.15, 1 + 0.18 * v); };
  g.ball = xi => {
    if (xi < 0 || xi > sylls.length - 0.001) { op(ballG, 0); items.forEach((_, i) => g.hit(i, 0)); return; }
    op(ballG, 1);
    const i = Math.floor(xi), f = xi - i, a = items[i], b = items[Math.min(i + 1, items.length - 1)];
    const hgt = (b.st ? size * 1.9 : size * 0.9);
    const bx = lerp(a.cx, b.cx, f), by = -size * 1.75 - Math.sin(f * Math.PI) * hgt * 0.6;
    tr(ballG, bx, by);
    items.forEach((it, k) => g.hit(k, k === i ? Math.max(0, 1 - f * 2) * (it.st ? 1 : 0.4) : 0));
  };
  g.set(1); g.marks(0); g.feet(0); g.ball(-1);
  return g;
}

/* ---------- curtains and title card ---------- */
function engCurtains(parent, w, h) {
  const g = G(parent);
  const cid = 'engcur' + Math.round(w * 7 + h * 3);
  const cp = E('clipPath', { id: cid }, defs()); E('rect', { x: 0, y: 0, width: w, height: h }, cp);
  const inner = G(g, { 'clip-path': `url(#${cid})` });
  const half = sd => {
    const c = G(inner);
    E('rect', { x: 0, y: 0, width: w / 2 + 20, height: h, fill: linGrad('#B3122E', '#6E0A1C', false) }, c);
    let folds = ''; for (let x = 20; x < w / 2; x += 44) folds += `M${x},0 Q${x + 10},${h / 2} ${x},${h} `;
    E('path', { d: folds, stroke: '#5A0816', 'stroke-width': 10, opacity: 0.55, fill: 'none' }, c);
    E('path', { d: folds, stroke: '#E0405E', 'stroke-width': 3, opacity: 0.35, fill: 'none', transform: 'translate(14 0)' }, c);
    return c;
  };
  const L = half(-1), R = half(1);
  E('rect', { x: 0, y: 0, width: w, height: 40, fill: linGrad('#C2203E', '#7A0C20', true) }, inner);   // valance
  let sc = ''; for (let x = 0; x < w; x += 60) sc += `M${x},40 Q${x + 30},70 ${x + 60},40 `;
  E('path', { d: sc, fill: '#9A1028', stroke: '#E2B33C', 'stroke-width': 3 }, inner);
  g.set = p => { p = clamp(p); tr(L, -p * (w / 2 + 30), 0); tr(R, w / 2 - 20 + p * (w / 2 + 30), 0); };
  g.set(0);
  return g;
}
function engTitle(parent, epLine) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#1A0A12', '#3A0E1E', true) }, g);
  const spot = E('ellipse', { cx: 600, cy: 420, rx: 520, ry: 330, fill: glow('#FFE6A8'), opacity: 0.35 }, g);
  E('rect', { x: 0, y: 640, width: 1200, height: 110, fill: linGrad('#7A4A24', '#4A2A12', true) }, g);   // stage floor
  let fl = ''; for (let x = 0; x <= 1200; x += 80) fl += `M${x},640 L${x + (x - 600) * 0.3},750 `;
  E('path', { d: fl, stroke: '#3A2010', 'stroke-width': 2, opacity: 0.6 }, g);
  const masks = engMasks(g, 0.7); tr(masks, 600, 120);
  const logo = G(g);
  const l1 = T(logo, 0, -40, "ALL THE SCHOOL'S", { size: 70, weight: 800, anchor: 'middle', fill: '#FFE6A8' });
  const l2 = T(logo, 0, 54, 'A STAGE', { size: 104, weight: 800, anchor: 'middle', fill: ENG.gold });
  engOutline(l1, '#4A0A18', 12); engOutline(l2, '#4A0A18', 14);
  const ep = T(g, 600, 470, epLine || '', { size: 38, weight: 700, anchor: 'middle', fill: '#FFFFFF' });
  const cur = engCurtains(g, 1200, 750);
  // gold proscenium frame on top
  E('path', { d: 'M0,0 L1200,0 L1200,750 L1150,750 L1150,60 Q600,10 50,60 L50,750 L0,750 Z', fill: linGrad('#E2B33C', '#8C6514', true), stroke: '#5A3A07', 'stroke-width': 4 }, g);
  g.logo = logo; g.ep = ep; g.curtains = cur;
  g.set = (p, t) => {
    t = t || 0;
    cur.set(P(p, 0, 0.45, ease));
    const lp = clamp((p - 0.35) / 0.4);
    op(logo, clamp(lp * 2.5)); tr(logo, 600, 300, Math.max(0.01, 0.5 + 0.5 * pop(lp)));
    op(ep, clamp((p - 0.6) / 0.25)); op(masks, clamp((p - 0.45) / 0.3));
    tr(masks, 600, 120, 0.7, Math.sin(t * 1.6) * 5);
    attr(spot, 'opacity', 0.3 + 0.08 * Math.sin(t * 1.3));
  };
  g.set(1, 0);
  return g;
}

/* ---------- sets ---------- */
function engClassroom(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#EDE6D6', '#D8CFBA', true) }, g);   // wall
  E('rect', { x: 0, y: 590, width: 1200, height: 160, fill: '#B9A68A' }, g);   // floor
  let fl = ''; for (let x = -200; x <= 1400; x += 100) fl += `M${x},590 L${x + (x - 600) * 0.45},750 `;
  E('path', { d: fl, stroke: '#9E8C70', 'stroke-width': 2 }, g);
  E('rect', { x: 0, y: 582, width: 1200, height: 10, fill: '#8C7A5E' }, g);
  // windows (right) with palms and a block of flats beyond
  const win_ = G(g); tr(win_, 1010, 120);
  E('rect', { x: 0, y: 0, width: 170, height: 300, fill: linGrad('#7CCBFF', '#D9F1FF', true), stroke: '#FFFFFF', 'stroke-width': 10 }, win_);
  E('rect', { x: 70, y: 120, width: 90, height: 180, fill: '#F2C6A0', stroke: '#8C9AA6', 'stroke-width': 2 }, win_);
  for (let y = 136; y < 290; y += 22) E('line', { x1: 78, y1: y, x2: 152, y2: y, stroke: '#8C9AA6', 'stroke-width': 3, 'stroke-dasharray': '8 6' }, win_);
  E('path', { d: 'M30,300 Q36,200 26,140', stroke: '#8B5A2B', 'stroke-width': 9, fill: 'none' }, win_);
  [[-60, -10], [-20, -40], [30, -30], [60, 0], [0, 10]].forEach(([dx, dy]) => E('path', { d: `M26,140 Q${26 + dx * 0.5},${130 + dy} ${26 + dx},${150 + dy * 0.2}`, stroke: '#2C8C4C', 'stroke-width': 10, fill: 'none', 'stroke-linecap': 'round' }, win_));
  E('path', { d: 'M85,0 L85,300 M0,150 L170,150', stroke: '#FFFFFF', 'stroke-width': 7 }, win_);
  // ceiling fan above the window
  const fan = G(g); tr(fan, 1090, 40);
  E('rect', { x: -4, y: -40, width: 8, height: 34, fill: '#8C9AA6' }, fan);
  const blades = G(fan);
  const bl = G(blades);
  for (let k = 0; k < 3; k++) E('path', { d: 'M0,0 C20,-16 80,-22 90,-6 C80,8 20,10 0,0 Z', fill: '#F4F1E6', stroke: '#8C9AA6', 'stroke-width': 3, transform: `rotate(${k * 120})` }, bl);
  E('circle', { r: 14, fill: '#DCE4EA', stroke: '#8C9AA6', 'stroke-width': 3 }, fan);
  // whiteboard
  g.board = { x: 350, y: 110, w: 620, h: 330 };
  E('rect', { x: 340, y: 100, width: 640, height: 350, rx: 8, fill: '#B9C3CC', stroke: '#7C8894', 'stroke-width': 4 }, g);
  E('rect', { x: 350, y: 110, width: 620, height: 330, rx: 4, fill: '#FBFCFD' }, g);
  E('rect', { x: 420, y: 452, width: 480, height: 12, rx: 4, fill: '#9AA6B2' }, g);
  [['#E8424F', 500], ['#2E7DD8', 530], ['#1E9E5A', 560]].forEach(([c, x]) => E('rect', { x, y: 440, width: 24, height: 10, rx: 3, fill: c }, g));
  T(g, 940, 140, '8H', { size: 26, weight: 800, anchor: 'end', fill: '#9AA6B2' });
  // posters (left wall)
  const post = (x, y, w, h, col, lines) => {
    const p = G(g); tr(p, x, y, 1, -2);
    E('rect', { x: 0, y: 0, width: w, height: h, fill: col, stroke: SC_INK, 'stroke-width': 3 }, p);
    lines.forEach((l, k) => T(p, w / 2, 40 + k * 32, l, { size: 26, weight: 800, anchor: 'middle', fill: SC_INK }));
    return p;
  };
  post(60, 150, 200, 110, '#FFE45C', ['SHOW,', "DON'T TELL"]);
  const pl = post(80, 300, 160, 150, '#BDE7FF', ['P · E', 'E · L']);
  E('path', { d: 'M50,108 L50,140 M110,108 L110,140 M50,118 L110,118 M50,132 L110,132', stroke: SC_INK, 'stroke-width': 3, transform: '' }, pl);
  // Mr H's desk with his mugs
  const desk = G(g); tr(desk, 180, 560);
  E('rect', { x: -150, y: -20, width: 300, height: 26, rx: 4, fill: '#9C6B3E', stroke: '#6B4423', 'stroke-width': 4 }, desk);
  E('rect', { x: -140, y: 6, width: 280, height: 110, fill: '#8B5A2B', stroke: '#6B4423', 'stroke-width': 4 }, desk);
  const mugs = [];
  for (let k = 0; k < 7; k++) {
    const m = G(desk); tr(m, -120 + k * 38, -36);
    E('path', { d: 'M-14,-18 L14,-18 L12,16 L-12,16 Z', fill: ['#FFFFFF', '#F06A8A', '#5AB4E0', '#FFE45C', '#56D69B', '#B58CFF', '#FF9F43'][k], stroke: SC_INK, 'stroke-width': 2.5 }, m);
    E('path', { d: 'M14,-10 Q24,-8 22,2 Q20,10 12,8', fill: 'none', stroke: SC_INK, 'stroke-width': 2.5 }, m);
    mugs.push(m);
  }
  E('rect', { x: 60, y: -74, width: 70, height: 16, fill: '#7A1E2E', stroke: SC_INK, 'stroke-width': 2 }, desk);
  E('rect', { x: 64, y: -90, width: 64, height: 16, fill: '#2E7DD8', stroke: SC_INK, 'stroke-width': 2 }, desk);
  g.desk = [180, 540];
  g.setMugs = n => mugs.forEach((m, k) => op(m, k < n ? 1 : 0));
  g.upd = t => blades.setAttribute('transform', `scale(1 0.25) rotate(${((t * 220) % 360).toFixed(1)})`);
  g.upd(0);
  return g;
}
function engLibrary(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#3B2626', '#22161A', true) }, g);
  // arched window, dusk, a palm silhouette
  const wn = G(g); tr(wn, 600, 100);
  E('path', { d: 'M-110,330 L-110,60 Q-110,-50 0,-50 Q110,-50 110,60 L110,330 Z', fill: linGrad('#5B4A9C', '#F2A36B', true), stroke: '#6B4423', 'stroke-width': 12 }, wn);
  E('circle', { cx: 50, cy: 230, r: 34, fill: '#FFD58A', opacity: 0.8 }, wn);
  E('path', { d: 'M-50,330 Q-44,240 -60,170', stroke: '#2A1A2A', 'stroke-width': 9, fill: 'none' }, wn);
  [[-60, -10], [-20, -40], [30, -30], [50, 10]].forEach(([dx, dy]) => E('path', { d: `M-60,170 Q${-60 + dx * 0.5},${160 + dy} ${-60 + dx},${180 + dy * 0.2}`, stroke: '#2A1A2A', 'stroke-width': 9, fill: 'none', 'stroke-linecap': 'round' }, wn));
  E('path', { d: 'M0,-50 L0,330 M-110,140 L110,140', stroke: '#6B4423', 'stroke-width': 7 }, wn);
  // bookshelves left and right
  const r = rng(77), BOOK = ['#7A1E2E', '#2E5A8A', '#1E7A5A', '#B57B12', '#5A2E7A', '#9C4A16', '#2A6B6B', '#8A2A4A'];
  const books = [];
  [[30, 440], [760, 410]].forEach(([x0, w]) => {
    E('rect', { x: x0, y: 120, width: w, height: 460, fill: '#4A2E1E', stroke: '#2A1A10', 'stroke-width': 6 }, g);
    for (let s = 0; s < 4; s++) {
      const y = 150 + s * 108;
      E('rect', { x: x0, y: y + 92, width: w, height: 12, fill: '#6B4423' }, g);
      let x = x0 + 10;
      while (x < x0 + w - 30) {
        const bw = 14 + r() * 18, bh = 60 + r() * 28;
        const b = E('rect', { x, y: y + 92 - bh, width: bw, height: bh, fill: BOOK[Math.floor(r() * BOOK.length)], stroke: '#1A1010', 'stroke-width': 1.5 }, g);
        if (r() < 0.16) books.push({ b, x, y: y + 92 - bh, ph: r() * 6 });
        x += bw + 2;
      }
    }
  });
  // the SILENCE PLEASE sign
  const sign = G(g); tr(sign, 1010, 72);
  E('rect', { x: -150, y: -32, width: 300, height: 64, rx: 8, fill: '#F4F1E6', stroke: '#6B4423', 'stroke-width': 4 }, sign);
  T(sign, 0, 12, 'SILENCE PLEASE', { size: 32, weight: 800, anchor: 'middle', fill: '#7A1E2E', ls: 1 });
  g.sign = sign;
  // the bust of Shakespeare on a plinth
  const bust = G(g); tr(bust, 1080, 610);
  E('rect', { x: -60, y: -110, width: 120, height: 110, fill: '#CFC8B8', stroke: '#6E6A60', 'stroke-width': 4 }, bust);
  E('path', { d: 'M-50,-110 Q-50,-160 0,-164 Q50,-160 50,-110 Z', fill: '#E4DED0', stroke: '#6E6A60', 'stroke-width': 4 }, bust);
  E('ellipse', { cx: 0, cy: -194, rx: 32, ry: 40, fill: '#E4DED0', stroke: '#6E6A60', 'stroke-width': 4 }, bust);
  E('path', { d: 'M-32,-196 Q-34,-170 -24,-160 M32,-196 Q34,-170 24,-160 M-8,-168 Q0,-160 8,-168', fill: 'none', stroke: '#6E6A60', 'stroke-width': 3 }, bust);
  E('path', { d: 'M0,-196 L-6,-178 L6,-178', fill: 'none', stroke: '#6E6A60', 'stroke-width': 3 }, bust);
  T(bust, 0, -50, 'W.S.', { size: 26, weight: 800, anchor: 'middle', fill: '#6E6A60' });
  g.bust = bust;
  // floor, reading table and its green lamp
  E('rect', { x: 0, y: 600, width: 1200, height: 150, fill: '#3A2418' }, g);
  E('rect', { x: 0, y: 590, width: 1200, height: 12, fill: '#2A1A10' }, g);
  const table = G(g); tr(table, 600, 610);
  E('rect', { x: -260, y: -20, width: 520, height: 26, rx: 4, fill: '#7A4A24', stroke: '#4A2A12', 'stroke-width': 4 }, table);
  E('rect', { x: -240, y: 6, width: 18, height: 140, fill: '#4A2A12' }, table);
  E('rect', { x: 222, y: 6, width: 18, height: 140, fill: '#4A2A12' }, table);
  const lamp = G(table); tr(lamp, 180, -20);
  E('rect', { x: -6, y: -70, width: 12, height: 70, fill: '#C9A13C' }, lamp);
  E('path', { d: 'M-50,-70 Q0,-110 50,-70 Z', fill: '#1E7A4A', stroke: SC_INK, 'stroke-width': 3 }, lamp);
  const lampGlow = E('ellipse', { cx: 0, cy: -40, rx: 150, ry: 100, fill: glow('#FFE6A8'), opacity: 0.5 }, lamp);
  E('rect', { x: -170, y: -34, width: 110, height: 14, fill: '#F4EBD3', stroke: '#8A7A50', 'stroke-width': 2, transform: 'rotate(-4)' }, table);
  g.table = [600, 590];
  // dust motes
  const motes = [], mr = rng(31);
  for (let k = 0; k < 14; k++) motes.push({ e: E('circle', { r: 2 + mr() * 3, fill: '#FFE6A8' }, g), x: 300 + mr() * 600, y: 120 + mr() * 400, ph: mr() * 9 });
  g.upd = (t, spooky) => {
    spooky = spooky || 0;
    const fl = 0.5 + 0.06 * Math.sin(t * 7) - spooky * 0.35 * (Math.sin(t * 23) > 0.3 ? 1 : 0);
    attr(lampGlow, 'opacity', Math.max(0.05, fl));
    books.forEach(({ b, x, y, ph }) => b.setAttribute('transform', spooky > 0.05 ? `translate(0 ${(-Math.abs(Math.sin(t * 17 + ph)) * 8 * spooky).toFixed(1)})` : ''));
    motes.forEach(m => { attr(m.e, 'cx', m.x + Math.sin(t * 0.3 + m.ph) * 30); attr(m.e, 'cy', m.y + Math.cos(t * 0.23 + m.ph) * 20); m.e.style.opacity = (0.25 + 0.2 * Math.sin(t + m.ph)).toFixed(3); });
  };
  g.upd(0, 0);
  return g;
}
function engHall(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#2A2F45', '#1A1C2A', true) }, g);
  // side walls with wall fans
  const fans = [];
  [[90, 200], [1110, 200]].forEach(([x, y]) => {
    const f = G(g); tr(f, x, y);
    E('circle', { r: 46, fill: 'rgba(200,230,250,0.12)', stroke: '#9AB4C4', 'stroke-width': 4 }, f);
    const b = G(f); for (let k = 0; k < 3; k++) E('path', { d: 'M0,0 C14,-14 40,-20 42,-4 C40,8 16,6 0,0 Z', fill: '#7FB6D9', transform: `rotate(${k * 120})` }, b);
    E('circle', { r: 8, fill: '#E6EEF4' }, f);
    fans.push(b);
  });
  // proscenium and stage
  E('rect', { x: 170, y: 90, width: 860, height: 420, fill: '#14101A' }, g);
  const spotG = E('ellipse', { cx: 600, cy: 460, rx: 160, ry: 60, fill: glow('#FFF2C2'), opacity: 0 }, g);
  const cur = engCurtains(G(g, { transform: 'translate(170 90)' }), 860, 420);
  E('path', { d: 'M150,520 L150,70 L1050,70 L1050,520 L1030,520 L1030,90 L170,90 L170,520 Z', fill: '#5A1E2E', stroke: '#2A0A14', 'stroke-width': 4 }, g);
  const ban = G(g); tr(ban, 600, 46);
  E('rect', { x: -300, y: -26, width: 600, height: 52, rx: 8, fill: '#0F3A5A', stroke: '#E2B33C', 'stroke-width': 3 }, ban);
  T(ban, 0, 10, 'BANYAN HILL INTERNATIONAL SCHOOL', { size: 26, weight: 800, anchor: 'middle', fill: '#FFE6A8', ls: 1 });
  E('rect', { x: 130, y: 510, width: 940, height: 40, fill: '#8B5A2B', stroke: '#5A3A1A', 'stroke-width': 4 }, g);   // stage front
  const lec = G(g); tr(lec, 960, 510);
  E('path', { d: 'M-40,0 L-30,-120 L30,-120 L40,0 Z', fill: '#6B4423', stroke: SC_INK, 'stroke-width': 3 }, lec);
  E('rect', { x: -46, y: -136, width: 92, height: 20, rx: 4, fill: '#8B5A2B', stroke: SC_INK, 'stroke-width': 3 }, lec);
  E('circle', { cx: 0, cy: -80, r: 16, fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 2 }, lec);
  // floor and chair backs
  E('rect', { x: 0, y: 550, width: 1200, height: 200, fill: '#3A3446' }, g);
  for (let row = 0; row < 2; row++) for (let k = 0; k < 12; k++) {
    const x = 20 + k * 100 + row * 50, y = 640 + row * 70;
    E('rect', { x, y, width: 76, height: 70, rx: 12, fill: row ? '#1E5A8A' : '#2470A8', stroke: '#12304A', 'stroke-width': 3 }, g);
  }
  g.stage = [600, 500];
  g.curtain = p => cur.set(p);
  g.spot = (p, x) => { attr(spotG, 'opacity', 0.7 * clamp(p)); attr(spotG, 'cx', x === undefined ? 600 : x); };
  g.upd = t => fans.forEach((b, k) => tr(b, 0, 0, 1, (t * 500 + k * 40) % 360));
  g.curtain(1); g.upd(0);
  return g;
}
function engFlat(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#F7EBCB', '#EBD9AE', true) }, g);   // wall
  E('rect', { x: 0, y: 560, width: 1200, height: 190, fill: '#E6E0D6' }, g);   // tiles
  let tl = ''; for (let x = 0; x <= 1200; x += 120) tl += `M${x},560 L${x + (x - 600) * 0.4},750 `; for (let y = 600; y < 750; y += 48) tl += `M0,${y} L1200,${y} `;
  E('path', { d: tl, stroke: '#CFC6B6', 'stroke-width': 2 }, g);
  E('rect', { x: 0, y: 550, width: 1200, height: 12, fill: '#C9B48A' }, g);
  // kitchen doorway (left): Ah Ma is in here
  E('rect', { x: 30, y: 210, width: 150, height: 350, fill: '#7A5A3A', stroke: '#4A3420', 'stroke-width': 6 }, g);
  E('rect', { x: 42, y: 222, width: 126, height: 338, fill: linGrad('#FFF3D6', '#EBD6AE', true) }, g);
  E('rect', { x: 54, y: 300, width: 102, height: 50, fill: '#CFE3E8', opacity: 0.8 }, g);
  g.door = [105, 380];
  // window: the block opposite, laundry on bamboo poles
  const w_ = G(g); tr(w_, 760, 120);
  E('rect', { x: 0, y: 0, width: 390, height: 280, fill: linGrad('#7CCBFF', '#D9F1FF', true), stroke: '#FFFFFF', 'stroke-width': 12 }, w_);
  E('rect', { x: 20, y: 40, width: 350, height: 240, fill: '#F2E2C2', stroke: '#9C927C', 'stroke-width': 2 }, w_);
  for (let row = 0; row < 4; row++) for (let k = 0; k < 6; k++) E('rect', { x: 34 + k * 56, y: 56 + row * 56, width: 34, height: 26, fill: '#7FB6D9', stroke: '#9C927C', 'stroke-width': 1.5 }, w_);
  const laundry = [];
  [100, 210].forEach((y, row) => {
    E('line', { x1: 10, y1: y, x2: 380, y2: y, stroke: '#C9A06A', 'stroke-width': 6 }, w_);
    [[40, '#F06A8A'], [110, '#FFE45C'], [190, '#5AB4E0'], [270, '#FFFFFF'], [330, '#56D69B']].forEach(([x, col], k) => {
      if ((k + row) % 2) return;
      const c = E('path', { d: `M${x - 18},${y} L${x + 18},${y} L${x + 14},${y + 40} L${x - 14},${y + 40} Z`, fill: col, stroke: '#8C7A5E', 'stroke-width': 2 }, w_);
      laundry.push({ c, x, y, k });
    });
  });
  E('path', { d: 'M195,0 L195,280 M0,140 L390,140', stroke: '#FFFFFF', 'stroke-width': 8, opacity: 0.9 }, w_);
  // wall clock and family photo
  const ck = G(g); tr(ck, 640, 170);
  E('circle', { r: 40, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 4 }, ck);
  const hh = E('line', { x1: 0, y1: 0, x2: 0, y2: -20, stroke: SC_INK, 'stroke-width': 5, 'stroke-linecap': 'round' }, ck);
  const mm = E('line', { x1: 0, y1: 0, x2: 0, y2: -30, stroke: SC_INK, 'stroke-width': 3, 'stroke-linecap': 'round' }, ck);
  const ph = G(g); tr(ph, 300, 190, 1, 2);
  E('rect', { x: -70, y: -50, width: 140, height: 100, fill: '#C9A06A', stroke: SC_INK, 'stroke-width': 4 }, ph);
  E('rect', { x: -60, y: -40, width: 120, height: 80, fill: '#BDE7FF' }, ph);
  [[-30, '#F1C7A8'], [0, '#EDC39B'], [30, '#E8B98A']].forEach(([x, c]) => { E('circle', { cx: x, cy: 0, r: 13, fill: c }, ph); E('rect', { x: x - 14, y: 14, width: 28, height: 26, rx: 8, fill: '#2BA39A' }, ph); });
  // TV on a low cabinet, sofa, coffee table with kaya toast
  E('rect', { x: 230, y: 470, width: 180, height: 90, fill: '#9C6B3E', stroke: '#6B4423', 'stroke-width': 4 }, g);
  E('rect', { x: 240, y: 360, width: 160, height: 100, rx: 6, fill: '#1B2733', stroke: SC_INK, 'stroke-width': 4 }, g);
  E('rect', { x: 250, y: 370, width: 140, height: 80, fill: '#2E4A6B' }, g);
  const so = G(g); tr(so, 820, 560);
  E('rect', { x: -200, y: -150, width: 400, height: 90, rx: 24, fill: '#3E8E7E', stroke: '#1E5A50', 'stroke-width': 5 }, so);
  E('rect', { x: -220, y: -80, width: 440, height: 70, rx: 18, fill: '#4CA592', stroke: '#1E5A50', 'stroke-width': 5 }, so);
  E('rect', { x: -236, y: -120, width: 40, height: 110, rx: 16, fill: '#3E8E7E', stroke: '#1E5A50', 'stroke-width': 5 }, so);
  E('rect', { x: 196, y: -120, width: 40, height: 110, rx: 16, fill: '#3E8E7E', stroke: '#1E5A50', 'stroke-width': 5 }, so);
  E('rect', { x: -150, y: -140, width: 80, height: 60, rx: 14, fill: '#FFB547', stroke: '#B57B12', 'stroke-width': 4, transform: 'rotate(-8 -110 -110)' }, so);   // cushion
  const tb = G(g); tr(tb, 560, 630);
  E('rect', { x: -130, y: -20, width: 260, height: 20, rx: 6, fill: '#9C6B3E', stroke: '#6B4423', 'stroke-width': 4 }, tb);
  E('rect', { x: -112, y: 0, width: 14, height: 90, fill: '#6B4423' }, tb); E('rect', { x: 98, y: 0, width: 14, height: 90, fill: '#6B4423' }, tb);
  E('ellipse', { cx: -40, cy: -26, rx: 56, ry: 10, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3 }, tb);
  E('path', { d: 'M-80,-30 L-10,-30 L-14,-44 L-76,-44 Z', fill: '#E8B060', stroke: '#9C6A20', 'stroke-width': 2.5 }, tb);   // kaya toast
  E('rect', { x: -74, y: -40, width: 58, height: 5, fill: '#7CC08A' }, tb);
  E('rect', { x: 40, y: -50, width: 30, height: 30, rx: 4, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3 }, tb);
  g.table = [560, 610];
  // ceiling fan
  const fan = G(g); tr(fan, 560, 30);
  E('rect', { x: -4, y: -30, width: 8, height: 24, fill: '#8C9AA6' }, fan);
  const blades = G(fan);
  for (let k = 0; k < 3; k++) E('path', { d: 'M0,0 C24,-18 96,-24 110,-6 C96,10 24,12 0,0 Z', fill: '#8B5A2B', stroke: '#5A3A1A', 'stroke-width': 3, transform: `rotate(${k * 120})` }, blades);
  E('circle', { r: 14, fill: '#C9A13C', stroke: '#5A3A1A', 'stroke-width': 3 }, fan);
  g.upd = t => {
    blades.setAttribute('transform', `scale(1 0.25) rotate(${((t * 260) % 360).toFixed(1)})`);
    laundry.forEach(({ c, x, y, k }) => c.setAttribute('transform', `rotate(${(Math.sin(t * 2 + k) * 6).toFixed(1)} ${x} ${y})`));
  };
  g.clock = h => { tr(hh, 0, 0, 1, (h % 12) * 30); tr(mm, 0, 0, 1, (h % 1) * 360); };
  g.clock(19); g.upd(0);
  return g;
}
function engGlobe(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#6EC6FF', '#D9F1FF', true) }, g);   // open sky
  const clouds = G(g);
  [[200, 60, 1], [700, 40, 0.8], [1000, 80, 1.1]].forEach(([x, y, s]) => { const c = G(clouds); tr(c, x, y, s); E('ellipse', { cx: 0, cy: 0, rx: 70, ry: 22, fill: '#FFFFFF', opacity: 0.9 }, c); E('ellipse', { cx: 30, cy: -14, rx: 40, ry: 20, fill: '#FFFFFF', opacity: 0.9 }, c); });
  // galleries on both sides (three tiers), with tiny heads
  const gal = (x0, sd) => {
    for (let k = 0; k < 3; k++) {
      const y = 150 + k * 120;
      E('path', { d: `M${x0},${y} L${x0 + sd * 260},${y + 40} L${x0 + sd * 260},${y + 120} L${x0},${y + 110} Z`, fill: k % 2 ? '#D9C7A0' : '#E6D6B0', stroke: '#6B4423', 'stroke-width': 4 }, g);
      for (let j = 0; j < 6; j++) {
        const hx = x0 + sd * (24 + j * 40), hy = y + 54 + j * 6;
        E('circle', { cx: hx, cy: hy, r: 13, fill: ['#F1C7A8', '#C98E62', '#EDC39B', '#8A5A3A'][(j + k) % 4] }, g);
        E('rect', { x: hx - 15, y: hy + 10, width: 30, height: 30, rx: 8, fill: ['#7A1E2E', '#2E5A8A', '#1E7A5A', '#5A2E7A'][(j + k * 2) % 4] }, g);
      }
      E('path', { d: `M${x0},${y + 110} L${x0 + sd * 260},${y + 120}`, stroke: '#6B4423', 'stroke-width': 8 }, g);
    }
    E('path', { d: `M${x0},150 L${x0 + sd * 260},190`, stroke: '#5A3A1A', 'stroke-width': 10 }, g);
    E('path', { d: `M${x0 - sd * 20},120 L${x0 + sd * 280},170 L${x0 + sd * 280},150 L${x0 - sd * 20},96 Z`, fill: '#C9A86A', stroke: '#6B4423', 'stroke-width': 3 }, g);   // thatch edge
  };
  gal(0, 1); gal(1200, -1);
  // tiring house (back wall): half-timbered, two doors, a balcony
  E('rect', { x: 280, y: 130, width: 640, height: 360, fill: '#EFE3C6', stroke: '#5A3A1A', 'stroke-width': 6 }, g);
  let tim = ''; for (let x = 280; x <= 920; x += 80) tim += `M${x},130 L${x},490 `; tim += 'M280,250 L920,250 M280,370 L920,370 ';
  E('path', { d: tim, stroke: '#6B4423', 'stroke-width': 8 }, g);
  E('rect', { x: 330, y: 380, width: 90, height: 110, rx: 40, fill: '#3A2418', stroke: '#5A3A1A', 'stroke-width': 5 }, g);   // doors
  E('rect', { x: 780, y: 380, width: 90, height: 110, rx: 40, fill: '#3A2418', stroke: '#5A3A1A', 'stroke-width': 5 }, g);
  E('rect', { x: 500, y: 390, width: 200, height: 100, fill: '#7A1E2E', stroke: '#5A3A1A', 'stroke-width': 5 }, g);   // discovery space curtain
  let cf = ''; for (let x = 520; x < 700; x += 30) cf += `M${x},390 L${x},490 `;
  E('path', { d: cf, stroke: '#5A0816', 'stroke-width': 5, opacity: 0.6 }, g);
  E('rect', { x: 400, y: 200, width: 400, height: 46, fill: '#8B5A2B', stroke: '#5A3A1A', 'stroke-width': 4 }, g);   // balcony rail
  for (let x = 410; x < 800; x += 26) E('rect', { x, y: 210, width: 10, height: 32, fill: '#5A3A1A' }, g);
  g.balcony = [600, 196];
  // the heavens: canopy over the stage, on two painted pillars
  E('path', { d: 'M230,96 L970,96 L1000,138 L200,138 Z', fill: '#1E2A5A', stroke: '#E2B33C', 'stroke-width': 4 }, g);
  const sr = rng(8); for (let k = 0; k < 14; k++) E('circle', { cx: 250 + sr() * 700, cy: 104 + sr() * 28, r: 3 + sr() * 2, fill: '#FFE45C' }, g);
  [[330, 540], [870, 540]].forEach(([x, y]) => {
    E('rect', { x: x - 22, y: 138, width: 44, height: y - 138, fill: linGrad('#C2453A', '#7A1E2E', false), stroke: '#4A0A18', 'stroke-width': 4 }, g);
    E('path', { d: `M${x - 18},200 Q${x},230 ${x + 18},260 M${x - 18},320 Q${x},360 ${x + 18},380`, stroke: '#E8B0A0', 'stroke-width': 3, fill: 'none', opacity: 0.6 }, g);
    E('rect', { x: x - 32, y: 130, width: 64, height: 18, fill: '#E2B33C', stroke: '#5A3A07', 'stroke-width': 3 }, g);
  });
  // the thrust stage, jutting into the yard
  E('path', { d: 'M230,490 L970,490 L1060,600 L140,600 Z', fill: linGrad('#B07A45', '#8B5A2B', true), stroke: '#5A3A1A', 'stroke-width': 5 }, g);
  let pl = ''; for (let x = 260; x < 960; x += 50) pl += `M${x},490 L${x + (x - 600) * 0.25},600 `;
  E('path', { d: pl, stroke: '#6B4423', 'stroke-width': 2, opacity: 0.6 }, g);
  E('path', { d: 'M140,600 L1060,600 L1060,640 L140,640 Z', fill: '#6B4423', stroke: '#4A2A12', 'stroke-width': 4 }, g);
  g.stage = [600, 560];
  // the yard and the groundlings (standing, in front of the stage)
  E('rect', { x: 0, y: 640, width: 1200, height: 110, fill: '#9C8A6A' }, g);
  const crowd = [], cr = rng(19), SK = ['#F1C7A8', '#C98E62', '#EDC39B', '#8A5A3A', '#E8B98A'], CL = ['#6B5A3A', '#7A3A2A', '#4A5A3A', '#5A4A6A', '#8A6A3A'];
  for (let k = 0; k < 16; k++) {
    const x = 40 + k * 74 + (cr() - 0.5) * 20, y = 690 + (k % 2) * 30;
    const p = G(g); tr(p, x, y);
    E('path', { d: 'M-34,80 Q-32,10 0,8 Q32,10 34,80 Z', fill: CL[k % 5], stroke: '#2A1A10', 'stroke-width': 3 }, p);
    E('circle', { cx: 0, cy: -14, r: 24, fill: SK[(k * 3) % 5], stroke: '#2A1A10', 'stroke-width': 3 }, p);
    if (k % 3 === 0) E('path', { d: 'M-26,-24 Q0,-56 26,-24 Z', fill: '#4A3A2A' }, p);   // a cap
    crowd.push({ g: p, x, y, ph: cr() * 6 });
  }
  g.crowd = crowd;
  g.upd = (t, rowdy) => {
    rowdy = rowdy || 0;
    crowd.forEach(({ g: p, x, y, ph }) => tr(p, x + Math.sin(t * 1.3 + ph) * 3 * (1 + rowdy * 2), y - Math.abs(Math.sin(t * (2 + rowdy * 5) + ph)) * (2 + rowdy * 16)));
    tr(clouds, (t * 6) % 200 - 60, 0);
  };
  g.upd(0, 0);
  return g;
}
function engGlobeOutside(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#7CCBFF', '#E2F4FF', true) }, g);
  E('rect', { x: 0, y: 520, width: 1200, height: 230, fill: linGrad('#4A8AA8', '#2A5A78', true) }, g);   // the Thames
  const ripples = G(g);
  for (let k = 0; k < 10; k++) E('path', { d: `M${k * 130},${580 + (k % 3) * 40} q20,-8 40,0 q20,8 40,0`, fill: 'none', stroke: '#BDE7FF', 'stroke-width': 3, opacity: 0.6 }, ripples);
  E('path', { d: 'M0,520 L1200,500 L1200,540 L0,560 Z', fill: '#7A9A5A' }, g);   // bank
  // the playhouse: a many-sided "wooden O", drawn as a squat cylinder
  const b = G(g); tr(b, 600, 520);
  E('path', { d: 'M-300,-200 L-300,0 Q0,46 300,0 L300,-200 Q0,-160 -300,-200 Z', fill: '#F4EEDC', stroke: '#5A3A1A', 'stroke-width': 6 }, b);
  let tim = '';
  for (let k = 1; k < 10; k++) { const x = -300 * Math.cos(k / 10 * Math.PI); tim += `M${x.toFixed(1)},${(46 * (1 - (x / 300) ** 2) * 0.5 - 1).toFixed(1)} L${x.toFixed(1)},${(-200 + 40 * (1 - (x / 300) ** 2) * 0.5).toFixed(1)} `; }
  tim += 'M-300,-66 Q0,-24 300,-66 M-300,-134 Q0,-94 300,-134';
  E('path', { d: tim, stroke: '#6B4423', 'stroke-width': 7, fill: 'none' }, b);
  E('path', { d: 'M-326,-196 Q0,-150 326,-196 L270,-246 Q0,-214 -270,-246 Z', fill: '#D9B35A', stroke: '#8A6A2A', 'stroke-width': 5, 'stroke-linejoin': 'round' }, b);   // thatch ring
  let th = ''; for (let x = -300; x < 300; x += 18) th += `M${x},${(-196 + 46 * (1 - (x / 326) ** 2)).toFixed(0)} L${(x * 0.86).toFixed(0)},${(-244 + 32 * (1 - (x / 300) ** 2)).toFixed(0)} `;
  E('path', { d: th, stroke: '#B08A3A', 'stroke-width': 2, opacity: 0.7 }, b);
  E('rect', { x: -50, y: -290, width: 100, height: 64, fill: '#F4EEDC', stroke: '#5A3A1A', 'stroke-width': 5 }, b);   // the hut
  E('path', { d: 'M-60,-286 L0,-320 L60,-286 Z', fill: '#D9B35A', stroke: '#8A6A2A', 'stroke-width': 4 }, b);
  E('line', { x1: 0, y1: -320, x2: 0, y2: -440, stroke: '#5A3A1A', 'stroke-width': 6 }, b);
  const flag = E('path', { d: '', fill: '#E8424F', stroke: '#8A1A24', 'stroke-width': 3 }, b);
  E('rect', { x: -40, y: -70, width: 80, height: 90, rx: 30, fill: '#3A2418', stroke: '#5A3A1A', 'stroke-width': 5 }, b);   // entrance
  g.flagXY = [600, 520 - 420];
  g.upd = t => {
    const w = Math.sin(t * 5) * 8;
    flag.setAttribute('d', `M0,-440 Q40,${(-446 + w).toFixed(1)} 80,${(-436 - w).toFixed(1)} L80,-396 Q40,${(-406 + w).toFixed(1)} 0,-400 Z`);
    tr(ripples, Math.sin(t * 0.7) * 20, 0);
  };
  g.upd(0);
  return g;
}

/* ---------- the quick-fire quiz chapter (same in every episode) ---------- */
function engQuizScene(S, o) {
  o = o || {};
  const { at, end, mid } = S, root = S.root, lines = S.ch.lines;
  const strip = c => c.replace(/^\*\*[^*]+:\*\*\s*/, '');
  const has = id => lines.some(l => l.id === id);
  const Lbg = G(root), Lcast = G(root), Lfg = G(root);
  // set: a quiz-show stage
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#1A1036', '#0C0820', true) }, Lbg);
  let rays = '';
  for (let i = 0; i < 18; i++) { const a0 = i / 18 * TAU, a1 = a0 + TAU / 44; rays += `M0,0 L${(Math.cos(a0) * 1300).toFixed(0)},${(Math.sin(a0) * 1300).toFixed(0)} L${(Math.cos(a1) * 1300).toFixed(0)},${(Math.sin(a1) * 1300).toFixed(0)} Z `; }
  const rayP = E('path', { d: rays, fill: o.accent || ENG.violet, opacity: 0.1 }, Lbg);
  E('ellipse', { cx: 260, cy: 640, rx: 260, ry: 70, fill: glow('#FFE6A8'), opacity: 0.35 }, Lbg);
  E('rect', { x: 120, y: 600, width: 280, height: 40, rx: 10, fill: '#2A1A4A', stroke: ENG.gold, 'stroke-width': 4 }, Lbg);
  const headG = G(Lfg), head = T(headG, 0, 0, o.title || 'QUICK-FIRE QUIZ', { size: 72, weight: 800, anchor: 'middle', fill: ENG.gold });
  engOutline(head, '#2A0A3A', 12);
  const sub = T(Lfg, 720, 410, 'Say each answer out loud before it appears.', { size: 30, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  const counter = T(Lfg, 1150, 70, '', { size: 30, weight: 800, anchor: 'end', fill: ENG.gold });
  // cast: whoever speaks stands at the host spot
  const mk = o.cast || ((p, who) => engCast(p, who));
  const people = {};
  lines.forEach(l => { if (l.who && l.who !== 'narr' && !people[l.who]) { try { people[l.who] = mk(Lcast, l.who); } catch (e) { /* off-screen voice */ } } });
  // question and answer cards
  const Q = [];
  for (let k = 1; k <= 9; k++) {
    if (!has('q' + k)) break;
    const ql = lines.find(l => l.id === 'q' + k), al = lines.find(l => l.id === 'a' + k);
    const qc = engCard(Lfg, strip(ql.cap), { w: 680, size: 34, tab: 'QUESTION ' + k, tabCol: '#5A3AB8', stroke: ENG.violet });
    const ac = al ? engCard(Lfg, strip(al.cap), { w: 680, size: 32, icon: 'tick', stroke: C.good, boldFill: C.good }) : null;
    const rg = ring(Lfg, 46, ENG.gold);
    Q.push({ k, qc, ac, rg });
  }
  const outroC = has('outro') ? engCard(Lfg, strip(lines.find(l => l.id === 'outro').cap), { w: 700, size: 36, stroke: ENG.gold }) : null;
  return t => {
    tr(rayP, 600, 400, 1, (t * 4) % 360);
    const pIntro = P(t, at(lines[0].id), 0.5, pop);
    const qStart = Q.length ? at('q1') : 1e9;
    const small = t >= qStart - 0.05;
    op(headG, clamp(pIntro * 2)); tr(headG, small ? 760 : 720, small ? 150 : 330, small ? 0.6 : 0.9);
    op(sub, t < qStart ? P(t, mid(lines[0].id, 0.4), 0.4, linear) : 0);
    // the current speaker at the host spot
    let who = '';
    for (const l of lines) if (t >= l.start - S.ch.start - 0.05) who = l.who || who;
    for (const k in people) {
      const on = k === who && k !== 'narr';
      op(people[k], on ? 1 : 0);
      if (on) { tr(people[k], 260, 470, 1.05); people[k].set({ t, talk: scTalk(S, t, k), mood: k === 'mrh' ? 'neutral' : 'happy', look: 0.5 }); }
    }
    let shown = '';
    Q.forEach(({ k, qc, ac, rg }) => {
      const qid = 'q' + k, aid = 'a' + k;
      const nextQ = has('q' + (k + 1)) ? at('q' + (k + 1)) : (has('outro') ? at('outro') : S.D + 5);
      const vis = t >= at(qid) - 0.05 && t < nextQ - 0.05;
      op(qc, 0); if (ac) op(ac, 0); op(rg, 0);
      if (!vis) return;
      shown = `${k} / ${Q.length}`;
      engPop(qc, t, at(qid), 760, 330);
      const think0 = end(qid), think1 = ac ? at(aid) : think0 + 4;
      if (t >= think0 && t < think1 + 0.3) { op(rg, 1 - P(t, think1, 0.3, linear)); tr(rg, 760, 560); rg.set(clamp((t - think0) / Math.max(0.1, think1 - think0))); }
      if (ac && t >= at(aid) - 0.02) engPop(ac, t, at(aid), 760, 520);
    });
    setText(counter, shown);
    if (outroC) { if (t >= at('outro') - 0.05) engPop(outroC, t, at('outro'), 740, 400); else op(outroC, 0); }
    if (o.extra) o.extra(t);
  };
}

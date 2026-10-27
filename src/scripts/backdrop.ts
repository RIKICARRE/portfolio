// Fondo de píxeles: estrellas, relieve lunar en tres capas con paralaje de scroll,
// "bugs" a lo Space Invaders a la deriva y paquetes de datos cruzando la pantalla.
// Se pinta en un canvas de baja resolución y se escala sin suavizado.

const PX = 4;

const CRAB = [
  [
    '..#.....#..',
    '...#...#...',
    '..#######..',
    '.##.###.##.',
    '###########',
    '#.#######.#',
    '#.#.....#.#',
    '...##.##...',
  ],
  [
    '..#.....#..',
    '#..#...#..#',
    '#.#######.#',
    '###.###.###',
    '###########',
    '.#########.',
    '..#.....#..',
    '.#.......#.',
  ],
];
const SQUID = [
  [
    '...##...',
    '..####..',
    '.######.',
    '##.##.##',
    '########',
    '..#..#..',
    '.#.##.#.',
    '#.#..#.#',
  ],
  [
    '...##...',
    '..####..',
    '.######.',
    '##.##.##',
    '########',
    '.#.##.#.',
    '#......#',
    '.#....#.',
  ],
];

type RGB = [number, number, number];
const LIME: RGB = [195, 242, 59];
const MID: RGB = [125, 176, 43];
const DEEP: RGB = [90, 135, 33];

function mulberry(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function startBackdrop(canvas: HTMLCanvasElement, reduce: boolean) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let W = 0;
  let H = 0;
  let img: ImageData;
  const rnd = mulberry(1987);

  const stars = Array.from({ length: 110 }, () => ({
    x: rnd(),
    y: rnd(),
    d: 0.2 + rnd() * 0.8,
    ph: rnd() * 6.28,
    big: rnd() > 0.88,
  }));

  const bugs = Array.from({ length: 7 }, (_, i) => ({
    kind: i % 2 ? SQUID : CRAB,
    x: rnd(),
    y: rnd() * 0.7,
    vx: (rnd() - 0.5) * 0.012,
    vy: 0.002 + rnd() * 0.004,
    a: 0.22 + rnd() * 0.2,
  }));

  const packets = Array.from({ length: 5 }, () => ({
    y: 0.12 + rnd() * 0.6,
    x: rnd(),
    v: 0.03 + rnd() * 0.06,
    len: 4 + Math.floor(rnd() * 6),
  }));

  const layers = [
    { base: 0.2, amp: 0.1, k: 0.012, speed: 0.02, color: DEEP, fill: 0.18, line: 0.45, seed: rnd() * 100 },
    { base: 0.13, amp: 0.09, k: 0.02, speed: 0.05, color: MID, fill: 0.26, line: 0.6, seed: rnd() * 100 },
    { base: 0.06, amp: 0.07, k: 0.034, speed: 0.1, color: LIME, fill: 0.34, line: 0.8, seed: rnd() * 100 },
  ];

  function resize() {
    W = Math.max(1, Math.ceil(innerWidth / PX));
    H = Math.max(1, Math.ceil(innerHeight / PX));
    canvas.width = W;
    canvas.height = H;
    img = ctx!.createImageData(W, H);
  }

  function set(x: number, y: number, c: RGB, a: number) {
    x |= 0;
    y |= 0;
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const i = (y * W + x) * 4;
    const na = Math.min(255, a * 255);
    if (na > img.data[i + 3]) {
      img.data[i] = c[0];
      img.data[i + 1] = c[1];
      img.data[i + 2] = c[2];
      img.data[i + 3] = na;
    }
  }

  // atenúa el relieve donde va el texto (mitad izquierda en escritorio, todo en móvil)
  function textMask(x: number) {
    if (innerWidth <= 820) return 0.5;
    const u = x / W;
    return 0.35 + 0.65 * Math.min(1, Math.max(0, (u - 0.3) / 0.3));
  }

  function ridge(L: (typeof layers)[number], x: number, off: number) {
    const u = (x + off) * L.k;
    const h =
      Math.sin(u + L.seed) * 0.5 +
      Math.sin(u * 2.3 + L.seed * 1.7) * 0.3 +
      Math.sin(u * 5.1 + L.seed * 0.6) * 0.2;
    return H * (L.base + L.amp * (h * 0.5 + 0.5));
  }

  function sprite(frames: string[][], f: number, ox: number, oy: number, a: number) {
    const rows = frames[f];
    for (let y = 0; y < rows.length; y++)
      for (let x = 0; x < rows[y].length; x++) if (rows[y][x] === '#') set(ox + x, oy + y, LIME, a);
  }

  function frame(t: number) {
    img.data.fill(0);
    const sy = scrollY / PX;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const prog = scrollY / max;

    for (const s of stars) {
      const y = (((s.y * H - sy * s.d * 0.06) % H) + H) % H;
      const tw = 0.5 + 0.5 * Math.sin(t * 0.0015 + s.ph);
      const a = (0.15 + 0.45 * s.d) * (0.5 + 0.5 * tw);
      const x = s.x * W;
      set(x, y, LIME, a);
      if (s.big) {
        set(x - 1, y, LIME, a * 0.6);
        set(x + 1, y, LIME, a * 0.6);
        set(x, y - 1, LIME, a * 0.6);
        set(x, y + 1, LIME, a * 0.6);
      }
    }

    for (const b of bugs) {
      const x = (((b.x * W + t * b.vx * 0.06 * W * 0.1 + sy * 0.02) % (W + 24)) + W + 24) % (W + 24) - 12;
      const y = (((b.y * H + t * b.vy * 0.01 * H) % (H * 0.85)) + H * 0.85) % (H * 0.85);
      sprite(b.kind, Math.floor(t / 520) % 2, x, y, b.a * textMask(x + 5) * (innerWidth <= 820 ? 0.5 : 1));
    }

    for (const p of packets) {
      const x = (((p.x * W + t * p.v * 0.05 * W * 0.2) % (W + 20)) + W + 20) % (W + 20) - 10;
      const y = p.y * H;
      for (let i = 0; i < p.len; i++) set(x - i, y, LIME, 0.75 * (1 - i / p.len));
    }

    layers.forEach((L, li) => {
      const off = scrollY * L.speed * 0.06 + t * 0.004 * (li + 1);
      for (let x = 0; x < W; x++) {
        const top = H - ridge(L, x, off);
        const edge = Math.floor(top);
        const m = textMask(x);
        set(x, edge, L.color, L.line * m);
        for (let y = edge + 1; y < H; y += 1) {
          if ((x + y + li) % 2 === 0 && (y - edge) % 3 !== 0) set(x, y, L.color, L.fill * m * (1 - (y - edge) / (H * 0.5)));
        }
      }
    });

    // un destello al cruzar la capa física (final de la página)
    if (prog > 0.9) {
      const k = (prog - 0.9) / 0.1;
      for (let x = 0; x < W; x += 2) set(x, H - 1 - (x % 3), LIME, 0.25 * k);
    }

    ctx!.putImageData(img, 0, 0);
  }

  resize();
  addEventListener('resize', () => {
    resize();
    frame(performance.now());
  });

  if (reduce) {
    frame(0);
    addEventListener('scroll', () => frame(0), { passive: true });
    return;
  }

  let last = 0;
  const loop = (t: number) => {
    if (t - last > 33) {
      last = t;
      frame(t);
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

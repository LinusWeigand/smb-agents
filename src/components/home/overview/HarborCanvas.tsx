import { useEffect, useRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

/**
 * Pixel-art harbour scene: AI container ships dock at the Neuroneus quay and get
 * loaded with context containers.
 *
 * This is a hand-written software renderer, not a picture. Everything is blitted
 * rectangle-by-rectangle into a 300x170 canvas at integer coordinates with
 * `imageSmoothingEnabled = false`, which is what gives it the crisp pixel look
 * at any display size. The vendor marks that ride the ships are real DOM nodes
 * layered over the canvas -- a canvas cannot redraw an SVG path cheaply per
 * frame -- and are repositioned each tick via `transform`.
 *
 * The drawing code is recovered from the deployed bundle and deliberately kept
 * close to its original shape: it is dense coordinate math where renaming
 * locals buys readability but risks silently moving pixels. Treat it as a
 * self-contained unit -- change the scene by editing draw calls, not by
 * refactoring the maths.
 *
 * The scene is driven by an rAF loop that is paused by an IntersectionObserver
 * while off screen, and skipped entirely under `prefers-reduced-motion`, where
 * a single frame is drawn at t=16.5s so the composition still reads.
 */

/** Shared positioning for each overlay mark stacked on the canvas. */
const OVERLAY_STYLE = {
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
} as const;

/** A docked ship: two stacked rows of container colours, plus an optional
 *  running light. A null slot means that container has not been loaded yet. */
type Ship = { cargo: (string | null)[][]; light?: string | null };

/** Per-frame crane state: where the trolley is, how far the hook has paid out,
 *  what colour it is currently carrying, and which containers have been picked
 *  up / set down so far this cycle. */
type CraneState = {
  tx: number;
  hookY: number;
  carry: string | null;
  picked: boolean[];
  dropped: boolean[];
};

export function HarborCanvas() {
  const e = useRef<HTMLCanvasElement>(null),
    t = useRef<HTMLDivElement>(null),
    n = useRef<HTMLDivElement>(null),
    r = useRef<HTMLDivElement>(null),
    i = useRef<HTMLDivElement>(null),
    o = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = e.current!,
      u = t.current!,
      v = n.current!,
      h = r.current!,
      j = i.current!,
      E = o.current!;
    if (!a || !u || !v || !h || !j || !E) return;
    const c = a.getContext("2d")!;
    if (!c) return;
    const d = 440,
      k = 140,
      m = 14,
      p = 300,
      b = m + 170;
    (c.imageSmoothingEnabled = !1), c.setTransform(1, 0, 0, 1, -k, -m);
    const x = (l: number, f: number, w: number, _: number, y: string) => {
        (c.fillStyle = y),
          c.fillRect(
            Math.round(l),
            Math.round(f),
            Math.round(w),
            Math.round(_),
          );
      },
      M = (l: HTMLElement, f: number, w: number, _?: boolean) => {
        l.style.transform =
          `translate(${f - k}px, ${w - m}px)` +
          (_ ? " translate(-50%, -50%)" : "");
      },
      T: number[][] = [],
      O: HTMLDivElement[] = [];
    function R(l: number): HTMLDivElement {
      if (!O[l]) {
        const f = document.createElement("div");
        (f.style.position = "absolute"),
          (f.style.left = "0"),
          (f.style.top = "0"),
          (f.innerHTML =
            '<svg width="5.5" height="5.5" viewBox="0 0 100 100"><polygon points="30,2 70,2 98,30 98,70 70,98 30,98 2,70 2,30" fill="#FFFFFF" mask="url(#hbOmk)"/></svg>'),
          u.appendChild(f),
          (O[l] = f);
      }
      return O[l];
    }
    function L() {
      for (let l = 0; l < T.length; l++) {
        const f = R(l);
        (f.style.display = "block"),
          (f.style.transform = `translate(${Math.round(T[l][0]) + 4.25 - k}px, ${Math.round(T[l][1]) + 0.75 - m}px)`);
      }
      for (let l = T.length; l < O.length; l++) O[l].style.display = "none";
    }
    const H = "#0F3A5A",
      D = "#D9D2C4",
      q = "#B7AE9E",
      V = "#8E8677",
      Z = "#6B6456",
      se = "#171717",
      le = "#26333F",
      at = "#1C2731",
      An = "#A63A2C",
      Mt = "#F2EEE4",
      En = "#D8D2C2",
      lt = "#35688F",
      z = "#171717",
      At = "#D97757",
      ce = "#10A37F",
      P = ["#C4553B", "#4E7A9B", "#7A8B5E", "#B5893F"],
      pe = 144,
      ee = 190,
      B = 132,
      Ae = 152;
    function Et(l: number, f: number, w: Ship) {
      (l = Math.round(l)), (f = Math.round(f));
      const _ = 100;
      x(l, f, _ - 6, 16, le),
        x(l + _ - 6, f, 3, 12, le),
        x(l + _ - 3, f, 2, 8, le),
        x(l + _ - 1, f, 1, 5, le),
        x(l, f, _ - 6, 2, "#3A4A58"),
        x(l, f + 12, _ - 6, 4, at),
        x(l, f + 14, _ - 4, 3, An),
        x(l + 3, f - 13, 15, 13, Mt),
        x(l + 3, f - 13, 15, 2, "#FFFFFF"),
        x(l + 3, f - 4, 15, 4, En);
      for (let N = 0; N < 3; N++) x(l + 5 + N * 4, f - 10, 3, 2, lt);
      x(l + 6, f - 17, 6, 4, Mt),
        x(l + 7, f - 16, 4, 2, lt),
        x(l + 13, f - 19, 3, 6, "#C9C2B2"),
        x(l + 13, f - 17, 3, 2, se),
        x(l + 2, f - 21, 1, 8, "#5A6672");
      const y = w.cargo;
      for (let N = 0; N < y.length; N++) {
        const S = l + 20 + N * 15;
        y[N][0] && I(S, f - 7, y[N][0]!), y[N][1] && I(S, f - 14, y[N][1]!);
      }
      w.light && x(l + 16, f - 16, 2, 2, w.light);
    }
    function I(l: number, f: number, w: string) {
      x(l, f, 14, 7, w),
        x(l, f, 14, 1, $e(w, 24)),
        x(l, f + 6, 14, 1, $e(w, -28)),
        x(l + 4, f + 1, 1, 5, $e(w, -18)),
        x(l + 9, f + 1, 1, 5, $e(w, -18)),
        w === z && T.push([l, f]);
    }
    function $e(l: string, f: number) {
      const w = parseInt(l.slice(1), 16),
        _ = Math.max(0, Math.min(255, (w >> 16) + f)),
        y = Math.max(0, Math.min(255, ((w >> 8) & 255) + f)),
        N = Math.max(0, Math.min(255, (w & 255) + f));
      return `rgb(${_},${y},${N})`;
    }
    function Cn() {
      x(ee, B, d - ee, 6, D),
        x(ee, B + 6, d - ee, 2, Z),
        x(ee, B + 8, d - ee, Ae - B - 8, q);
      for (let l = ee + 14; l < d; l += 22) x(l, B + 8, 1, Ae - B - 8, V);
      x(ee, Ae - 3, d - ee, 3, "#7A8B6E"), x(ee, B, 2, Ae - B, V);
      for (const l of [197, 318, 434])
        x(l, B + 8, 3, Ae - B - 10, "#4A4A42"),
          x(l, B + 8, 3, 1, "#5C5C52");
    }
    function Sn() {
      x(390, 100, 50, 32, "#EAE4D6"),
        x(390, 100, 50, 2, "#F7F3E9"),
        x(397, 118, 13, 14, "#8E8677"),
        x(397, 118, 13, 2, "#6B6456");
      for (let y = 0; y < 3; y++) x(397, 122 + y * 3, 13, 1, "#7A7264");
      for (let y = 0; y < 3; y++) x(417 + y * 7, 108, 4, 6, lt);
      x(388, 92, 54, 8, "#C4553B"), x(388, 92, 54, 2, "#D96A4E");
      const w = 46,
        _ = 390 + Math.round((50 - w) / 2);
      x(_ + 4, 88, 2, 4, "#6B6456"),
        x(_ + w - 6, 88, 2, 4, "#6B6456"),
        x(_, 73, w, 15, se),
        x(_, 73, w, 1, "#3A3A3A");
    }
    function Rn(l: CraneState) {
      I(204, 125, P[2]),
        I(204, 118, z),
        I(220, 125, P[0]),
        I(220, 118, P[3]),
        I(220, 111, z),
        I(236, 125, P[1]),
        I(272, 125, P[3]),
        I(272, 118, z),
        I(272, 111, P[0]),
        I(288, 125, P[2]),
        I(288, 118, P[1]),
        I(304, 125, P[0]),
        I(304, 118, z),
        I(304, 111, P[3]),
        I(320, 125, z),
        I(336, 125, P[1]),
        I(336, 118, P[2]),
        I(352, 125, P[3]),
        I(352, 118, z),
        l.dropped[0] && !l.picked[4] && I(204, 111, z),
        l.dropped[1] && !l.picked[5] && I(336, 111, z),
        l.dropped[2] && !l.picked[6] && I(352, 111, z),
        l.dropped[3] && !l.picked[7] && I(288, 111, ce);
    }
    const xe = { legL: 258, legR: 378, topY: 48, armL: 200, armR: 414 };
    M(j, (xe.armL + xe.armR) / 2, xe.topY - 5.5, !0), M(E, 415, 80.5, !0);
    function Tn() {
      const l = xe,
        f = 318,
        w = "#3E434A",
        _ = "#535A63";
      x(ee + 2, B + 2, d - ee - 2, 1, V);
      for (const y of [l.legL, l.legR])
        x(y, l.topY, 5, B - l.topY - 6, w),
          x(y + 4, l.topY, 1, B - l.topY - 6, _),
          x(y - 5, B - 7, 15, 5, w),
          x(y - 5, B - 7, 15, 1, _),
          x(y - 3, B - 2, 3, 2, _),
          x(y + 6, B - 2, 3, 2, _);
      x(l.armL, l.topY - 11, l.armR - l.armL, 11, se),
        x(l.armL, l.topY - 11, l.armR - l.armL, 1, "#3A3A3A"),
        x(l.armL, l.topY - 11, 3, 11, "#C4553B"),
        x(l.armR - 3, l.topY - 11, 3, 11, "#C4553B"),
        x(f - 2, 24, 4, l.topY - 11 - 24, se),
        x(f - 3, 22, 6, 3, "#3A3A3A"),
        x(f - 1, 20, 2, 2, "#C4553B"),
        x(f + 8, 30, 24, 7, se),
        x(f + 8, 30, 24, 1, "#3A3A3A");
      for (let y = 0; y < 3; y++) x(f + 12 + y * 6, 32, 3, 3, "#3A3A3A");
    }
    function Fn(l: number, f: number, w: string | null) {
      const _ = xe;
      x(l - 6, _.topY - 2, 12, 4, "#3A3A3A"),
        x(l - 6, _.topY - 2, 12, 1, "#4A4A4A"),
        x(l - 3, _.topY + 2, 1, f - _.topY - 2, "#4A4A4A"),
        x(l + 1, _.topY + 2, 1, f - _.topY - 2, "#4A4A4A"),
        x(l - 5, f, 10, 3, "#3A3A3A"),
        x(l - 5, f, 1, 4, "#171717"),
        x(l + 4, f, 1, 4, "#171717"),
        w && I(l - 7, f + 3, w);
    }
    function ct(l: number, f: number, w: string, _: number) {
      const y = d + 2 * f;
      let N = l % y;
      N < 0 && (N += y), (N -= f);
      const S = c.createLinearGradient(N - f, 0, N + f, 0);
      S.addColorStop(0, `rgba(${w},0)`),
        S.addColorStop(0.5, `rgba(${w},${_})`),
        S.addColorStop(1, `rgba(${w},0)`),
        (c.fillStyle = S),
        c.fillRect(0, pe + 1, d, b - pe - 1);
    }
    function Ln(l: number) {
      const f = pe,
        w = c.createLinearGradient(0, f, 0, b);
      w.addColorStop(0, "#356184"),
        w.addColorStop(0.28, H),
        w.addColorStop(1, H),
        (c.fillStyle = w),
        c.fillRect(0, f, d, b - f),
        x(0, f, d, 1, "#5A86AC");
      const _ = ((l * 14) % (d + 160)) - 80,
        y = c.createLinearGradient(_ - 80, 0, _ + 80, 0);
      y.addColorStop(0, "rgba(180,212,238,0)"),
        y.addColorStop(0.5, "rgba(180,212,238,0.38)"),
        y.addColorStop(1, "rgba(180,212,238,0)"),
        (c.fillStyle = y),
        c.fillRect(0, f, d, 1),
        ct(l * 11, 130, "150,192,226", 0.11),
        ct(-l * 7, 170, "5,22,40", 0.16),
        ct(l * 8 + 300, 90, "150,192,226", 0.07),
        Dn(l);
    }
    function Dn(l: number) {
      for (let f = 0; f < 84; f++) {
        const w = ((f * 73) % 97) / 97,
          _ = ((f * 131) % 89) / 89,
          y = ((f * 47) % 61) / 61,
          N = Math.sin(l * (0.9 + y * 1.1) + f * 2.4);
        if (N < 0.12) continue;
        const S = ((N - 0.12) / 0.88) * (y > 0.6 ? 0.6 : 0.42);
        let F = (w * d + l * (_ > 0.5 ? 2.4 : -1.7)) % d;
        F < 0 && (F += d);
        const J = pe + 3 + _ * (b - pe - 6),
          U = y > 0.6 ? "168,200,228" : f % 3 ? "120,158,196" : "56,96,140";
        x(F, J, N > 0.88 ? 2 : 1, 1, `rgba(${U},${S.toFixed(3)})`);
      }
    }
    function Ct(l: number, f: number, w: number, _: number, y = 0) {
      for (let N = 0; N < 8; N++) {
        const S = (w * 0.38 + _ + N / 8) % 1,
          F = f - S * (22 - Math.abs(y) * 8),
          J = l + Math.sin(w * 0.6 + _ + N * 2.1) * 2 + y * S * 38,
          U = S < 0.25 ? 2 : S < 0.6 ? 3 : 4,
          K = Math.round(72 + S * 66);
        x(
          J,
          F,
          U,
          U,
          `rgba(${K},${K + 8},${K + 16},${((1 - S) * 0.62).toFixed(3)})`,
        );
      }
    }
    function In() {
      const l = pe,
        f = "#A9BDB0",
        w = "#8CA695",
        _ = (y: number) => Math.max(0, Math.min(1, (190 - y) / 75));
      for (let y = 0; y < d; y++) {
        const N =
          (12 +
            6 * Math.sin(y * 0.028 + 0.5) +
            3 * Math.sin(y * 0.016 + 2.3)) *
          _(y);
        N >= 0.5 && x(y, l - N, 1, N, f);
      }
      for (let y = 0; y < d; y++) {
        const N =
          (7 +
            4 * Math.sin(y * 0.023 + 3.2) +
            2 * Math.sin(y * 0.052 + 1)) *
          _(y);
        N >= 0.5 && x(y, l - N, 1, N, w);
      }
    }
    const St = 70,
      me = 8,
      fe = 195,
      de = 302,
      ft = 54.6,
      Rt = 6,
      dt = 28.5,
      Tt = 5,
      ge = 40,
      ut = 7,
      ye = 60,
      Ee = 58.5,
      Ft = 10,
      He = d + 20,
      te = (l: number) => 1 - Math.pow(1 - l, 3),
      Lt = (l: number) => l * l,
      On = (l: number) => l * l * (3 - 2 * l);
    function Ce(l: number, f: number, w: number, _: number, y: number) {
      let N = _ - f;
      if ((N < 0 && (N += St), N > 4.5)) return;
      const S = Math.max(0, 1 - N / 4.5) * (0.25 + 0.75 * w);
      if (S < 0.04) return;
      const F = Math.min(6, N * 2);
      (c.globalAlpha = S),
        x(l - F, 164 + (y % 2), 6 + F, 1, y % 3 ? "#A9C6E1" : "#D8EAF7"),
        x(l + 3 - F / 2, 165 - (y % 2), 4 + F / 2, 1, "#8FB3D9"),
        N < 2.2 && x(l + 2 + (y % 5), 163, 2, 1, "#E6F2FB"),
        (c.globalAlpha = 1);
    }
    function Dt(l: number, f: number, w: number, _: number) {
      const y = Math.min(1, w * 8);
      if (y < 0.02) return;
      const N = Math.sin(_ * 12) > 0 ? 1 : 0;
      c.globalAlpha = y * 0.9;
      const S = Math.round(5 + w * 16);
      x(l - S, f + 13 + N, S, 1, "#EAF4FC"),
        x(
          l - Math.round(S * 0.7),
          f + 15,
          Math.round(S * 0.7),
          1,
          "#C4DBEF",
        ),
        x(l - 4, f + 14, 4, 2, "#F4FAFF");
      const F = Math.round(1 + w * 2);
      x(l + 96, f + 13 - F, 4, F, "#E8F4FC"),
        x(l + 100, f + 12 - N, 3, 1 + N, "#F6FBFF"),
        x(l + 99, f + 15, 5, 1, "#BFDCF2"),
        (c.globalAlpha = 1);
    }
    const re = [
        { pickX: 329, pickY: 136, dropX: 211, dropY: 111, load: z },
        { pickX: 359, pickY: 136, dropX: 343, dropY: 111, load: z },
        { pickX: 359, pickY: 143, dropX: 359, dropY: 111, load: z },
        { pickX: 344, pickY: 143, dropX: 295, dropY: 111, load: ce },
        { pickX: 211, pickY: 111, dropX: 267, dropY: 136, load: z },
        { pickX: 343, pickY: 111, dropX: 282, dropY: 143, load: z },
        { pickX: 359, pickY: 111, dropX: 282, dropY: 136, load: z },
        { pickX: 295, pickY: 111, dropX: 237, dropY: 136, load: ce },
      ],
      ht = 6.5,
      It = 1;
    function Wn(l: number): CraneState {
      const f = xe,
        w = {
          tx: re[0].pickX,
          hookY: f.topY + 10,
          carry: null as string | null,
          picked: re.map(() => !1),
          dropped: re.map(() => !1),
        };
      if (l < It) return w;
      const _ = l - It,
        y = Math.floor(_ / ht);
      for (let Q = 0; Q < Math.min(y, re.length); Q++)
        (w.picked[Q] = !0), (w.dropped[Q] = !0);
      if (y >= re.length) return (w.tx = 320), w;
      const N = re[y],
        S = (_ % ht) / ht,
        F = f.topY + 10,
        J = y + 1 < re.length ? re[y + 1].pickX : 320,
        U = N.pickY,
        K = N.dropY;
      let C = N.pickX,
        W = F,
        Y = null;
      return (
        S < 0.12
          ? (W = F + te(S / 0.12) * (U - 3 - F))
          : S < 0.2
            ? ((W = U - 3), (Y = S > 0.16 ? N.load : null))
            : S < 0.34
              ? ((W = U - 3 - te((S - 0.2) / 0.14) * (U - 3 - F)),
                (Y = N.load))
              : S < 0.56
                ? ((C =
                    N.pickX + te((S - 0.34) / 0.22) * (N.dropX - N.pickX)),
                  (Y = N.load))
                : S < 0.72
                  ? ((C = N.dropX),
                    (W = F + te((S - 0.56) / 0.16) * (K - 3 - F)),
                    (Y = N.load))
                  : S < 0.78
                    ? ((C = N.dropX), (W = K - 3))
                    : S < 0.9
                      ? ((C = N.dropX),
                        (W = K - 3 - te((S - 0.78) / 0.12) * (K - 3 - F)))
                      : (C = N.dropX + te((S - 0.9) / 0.1) * (J - N.dropX)),
        (w.picked[y] = S > 0.16),
        (w.dropped[y] = S >= 0.72),
        (w.tx = C),
        (w.hookY = W),
        (w.carry = Y),
        w
      );
    }
    function Ot(l: number) {
      const f = l % St;
      c.clearRect(0, 0, d, b), (T.length = 0), In(), Ln(l), Cn(), Sn();
      const w = Wn(f);
      Rn(w), Tn();
      let _,
        y,
        N = 0;
      if (f < dt) (_ = de), (y = !1);
      else if (f < ge) {
        const C = Math.min(1, (f - dt) / Tt);
        (_ = de + Lt(C) * (He - de)), (y = C < 1), (N = y ? C : 0);
      } else if (f < Ee) {
        const C = Math.min(1, (f - ge) / ut);
        (_ = -130 + te(C) * (ye + 130)), (y = C < 1), (N = 1 - te(C));
      } else {
        const C = Math.min(1, (f - Ee) / Ft);
        (_ = ye + On(C) * (de - ye)), (y = C < 1), (N = 4 * C * (1 - C));
      }
      const S = [
        [ce, z],
        [ce, null],
        [z, z],
        [P[1], P[0]],
        [z, ce],
      ];
      f < ge &&
        (w.picked[0] && (S[0][1] = null),
        w.picked[1] && (S[2][1] = null),
        w.picked[2] && (S[2][0] = null),
        w.picked[3] && (S[1][0] = null)),
        Et(_, 150, {
          cargo: S,
          light: y ? "rgb(74,222,128)" : "rgb(245,185,66)",
        }),
        M(h, Math.round(_) + 24, 153.5),
        Ct(Math.round(_) + 14, 131, f, 3.1, y ? -N : 0),
        y && Dt(_, 150, N, f);
      let F,
        J,
        U = 0;
      if (f < me)
        (F = -130 + te(f / me) * (fe + 130)),
          (J = !0),
          (U = 1 - te(f / me));
      else if (f < ft) (F = fe), (J = !1);
      else {
        const C = Math.min(1, (f - ft) / Rt);
        (F = fe + Lt(C) * (He - fe)), (J = C < 1), (U = J ? C : 0);
      }
      const K = [
        [At, P[1]],
        [P[3], null],
        [At, P[2]],
        [P[0], null],
        [null, null],
      ];
      w.dropped[4] && (K[3][1] = z),
        w.dropped[5] && (K[4][0] = z),
        w.dropped[6] && (K[4][1] = z),
        w.dropped[7] && (K[1][1] = ce),
        Et(F, 150, {
          cargo: K,
          light: J ? "rgb(74,222,128)" : "rgb(245,185,66)",
        }),
        M(v, Math.round(F) + 23, 153),
        Ct(Math.round(F) + 14, 131, f, 0.6, J ? -U : 0),
        J && Dt(F, 150, U, f);
      for (let C = 0; C < 14; C++) {
        const W = 12 + C * 15;
        if (W > F - 9 && f < me) break;
        const Y = (W + 130) / (fe + 130),
          Q = (1 - Math.cbrt(1 - Y)) * me;
        Ce(W, Q, 1 - te(Math.min(1, Q / me)), f, C);
      }
      for (let C = 0; C < 16; C++) {
        const W = 201 + C * 15,
          Y = Math.sqrt((W - fe) / (He - fe));
        Ce(W, ft + Y * Rt, Y, f, C);
      }
      for (let C = 0; C < 8; C++) {
        const W = 308 + C * 15,
          Y = Math.sqrt((W - de) / (He - de));
        Ce(W, dt + Y * Tt, Y, f, C + 1);
      }
      for (let C = 0; C < 4; C++) {
        const W = 12 + C * 15;
        if (W > _ - 9 && f >= ge && f < Ee) break;
        const Y = (W + 130) / (ye + 130);
        if (Y >= 1) break;
        const Q = ge + (1 - Math.cbrt(1 - Y)) * ut;
        Ce(W, Q, 1 - te(Math.min(1, (Q - ge) / ut)), f, C);
      }
      for (let C = 0; C < 17; C++) {
        const W = 66 + C * 15;
        if (W > _ - 9 && f >= Ee) break;
        const Y = (W - ye) / (de - ye);
        if (Y >= 1) break;
        const Q = 0.5 - Math.sin(Math.asin(1 - 2 * Y) / 3);
        Ce(W, Ee + Q * Ft, 4 * Q * (1 - Q), f, C + 2);
      }
      Fn(w.tx, w.hookY, w.carry), L(), (c.globalAlpha = 1);
    }
    const Wt = matchMedia("(prefers-reduced-motion: reduce)").matches;
    Ot(Wt ? 16.5 : 0);
    let ie = 0,
      Xe: number | undefined,
      zt = 0,
      pt = 0;
    const Pt = (l: number) => {
        Xe === void 0 && (Xe = l),
          (pt = zt + (l - Xe) / 1e3),
          Ot(pt),
          (ie = requestAnimationFrame(Pt));
      },
      zn = () => {
        ie && cancelAnimationFrame(ie), (ie = 0), (zt = pt), (Xe = void 0);
      };
    let Se: IntersectionObserver | undefined;
    Wt ||
      ((Se = new IntersectionObserver(
        ([l]) => {
          l.isIntersecting ? ie || (ie = requestAnimationFrame(Pt)) : zn();
        },
        { threshold: 0.2 },
      )),
      Se.observe(a));
    const Yt = new ResizeObserver(() => {
      u.style.transform = `scale(${a.clientWidth / p})`;
    });
    return (
      Yt.observe(a),
      (u.style.transform = `scale(${a.clientWidth / p})`),
      () => {
        Se == null || Se.disconnect(),
          Yt.disconnect(),
          ie && cancelAnimationFrame(ie),
          O.forEach((l) => l.remove());
      }
    );
  }, []);

  return jsx('div', {
    className: "w-full max-w-2xl mx-auto",
    children: jsxs("div", {
      className: "relative overflow-hidden",
      style: { fontSize: 0 },
      children: [
        jsx("canvas", {
          ref: e,
          width: 300,
          height: 170,
          role: "img",
          "aria-label":
            "Pixel-art harbor scene: AI container ships dock at the Neuroneus quay and get loaded with context containers",
          className: "block w-full h-auto",
          style: { imageRendering: "pixelated" },
        }),
        jsx("svg", {
          width: "0",
          height: "0",
          style: { position: "absolute" },
          "aria-hidden": "true",
          children: jsx("defs", {
            children: jsxs("mask", {
              id: "hbOmk",
              children: [
                jsx("polygon", {
                  points: "30,2 70,2 98,30 98,70 70,98 30,98 2,70 2,30",
                  fill: "white",
                }),
                jsx("polygon", {
                  points: "40,28 60,28 72,40 72,60 60,72 40,72 28,60 28,40",
                  fill: "black",
                }),
                jsx("polygon", {
                  points: "90,2 98,2 98,10 10,98 2,98 2,90",
                  fill: "black",
                }),
              ],
            }),
          }),
        }),
        jsxs("div", {
          ref: t,
          "aria-hidden": "true",
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            width: 440,
            height: 210,
            transformOrigin: "0 0",
            pointerEvents: "none",
          },
          children: [
            jsx("div", {
              ref: n,
              style: OVERLAY_STYLE,
              children: jsx("svg", {
                width: "48",
                height: "10",
                viewBox: "0 0 710 148.18",
                style: { display: "block", flex: "none" },
                children: jsxs("g", {
                  transform: "translate(-75.96,-223.53)",
                  children: [
                    jsx("path", {
                      fill: "#D97757",
                      d: "m 105.01,322.07 29.14,-16.35 0.49,-1.42 -0.49,-0.79 h -1.42 l -4.87,-0.3 -16.65,-0.45 -14.44,-0.6 -13.99,-0.75 -3.52,-0.75 -3.3,-4.35 0.34,-2.17 2.96,-1.99 4.24,0.37 9.37,0.64 14.06,0.97 10.2,0.6 15.11,1.57 h 2.4 l 0.34,-0.97 -0.82,-0.6 -0.64,-0.6 -14.55,-9.86 -15.75,-10.42 -8.25,-6 -4.46,-3.04 -2.25,-2.85 -0.97,-6.22 4.05,-4.46 5.44,0.37 1.39,0.37 5.51,4.24 11.77,9.11 15.37,11.32 2.25,1.87 0.9,-0.64 0.11,-0.45 -1.01,-1.69 -8.36,-15.11 -8.92,-15.37 -3.97,-6.37 -1.05,-3.82 c -0.37,-1.57 -0.64,-2.89 -0.64,-4.5 l 4.61,-6.26 2.55,-0.82 6.15,0.82 2.59,2.25 3.82,8.74 6.19,13.76 9.6,18.71 2.81,5.55 1.5,5.14 0.56,1.57 h 0.97 v -0.9 l 0.79,-10.54 1.46,-12.94 1.42,-16.65 0.49,-4.69 2.32,-5.62 4.61,-3.04 3.6,1.72 2.96,4.24 -0.41,2.74 -1.76,11.44 -3.45,17.92 -2.25,12 h 1.31 l 1.5,-1.5 6.07,-8.06 10.2,-12.75 4.5,-5.06 5.25,-5.59 3.37,-2.66 h 6.37 l 4.69,6.97 -2.1,7.2 -6.56,8.32 -5.44,7.05 -7.8,10.5 -4.87,8.4 0.45,0.67 1.16,-0.11 17.62,-3.75 9.52,-1.72 11.36,-1.95 5.14,2.4 0.56,2.44 -2.02,4.99 -12.15,3 -14.25,2.85 -21.22,5.02 -0.26,0.19 0.3,0.37 9.56,0.9 4.09,0.22 h 10.01 l 18.64,1.39 4.87,3.22 2.92,3.94 -0.49,3 -7.5,3.82 -10.12,-2.4 -23.62,-5.62 -8.1,-2.02 h -1.12 v 0.67 l 6.75,6.6 12.37,11.17 15.49,14.4 0.79,3.56 -1.99,2.81 -2.1,-0.3 -13.61,-10.24 -5.25,-4.61 -11.89,-10.01 h -0.79 v 1.05 l 2.74,4.01 14.47,21.75 0.75,6.67 -1.05,2.17 -3.75,1.31 -4.12,-0.75 -8.47,-11.89 -8.74,-13.39 -7.05,-12 -0.86,0.49 -4.16,44.81 -1.95,2.29 -4.5,1.72 -3.75,-2.85 -1.99,-4.61 1.99,-9.11 2.4,-11.89 1.95,-9.45 1.76,-11.74 1.05,-3.9 -0.07,-0.26 -0.86,0.11 -8.85,12.15 -13.46,18.19 -10.65,11.4 -2.55,1.01 -4.42,-2.29 0.41,-4.09 2.47,-3.64 14.74,-18.75 8.89,-11.62 5.74,-6.71 -0.04,-0.97 h -0.34 l -39.15,25.42 -6.97,0.9 -3,-2.81 0.37,-4.61 1.42,-1.5 11.77,-8.1 -0.04,0.04 z",
                    }),
                    jsx("path", {
                      fill: "#E9E4D8",
                      d: "m 317.73,349.33 c -18.82,0 -31.69,-10.5 -37.76,-26.66 -3.17,-8.42 -4.74,-17.36 -4.61,-26.36 0,-27.11 12.15,-45.94 39,-45.94 18.04,0 29.17,7.87 35.51,26.66 h 7.72 l -1.05,-25.91 c -10.8,-6.97 -24.3,-10.5 -40.72,-10.5 -23.14,0 -42.82,10.35 -53.77,29.02 -5.66,9.86 -8.53,21.07 -8.32,32.44 0,20.74 9.79,39.11 28.16,49.31 10.06,5.37 21.34,8.04 32.74,7.72 17.92,0 32.14,-3.41 44.74,-9.37 l 3.26,-28.57 h -7.87 c -4.72,13.05 -10.35,20.89 -19.69,25.05 -4.57,2.06 -10.35,3.11 -17.32,3.11 z m 81.18,-98.96 0.75,-12.75 h -5.32 l -23.7,7.12 v 3.86 l 10.5,4.87 v 89.17 c 0,6.07 -3.11,7.42 -11.25,8.44 v 6.52 h 40.31 v -6.52 c -8.17,-1.01 -11.25,-2.36 -11.25,-8.44 V 250.4 l -0.04,-0.04 z m 160.31,108.75 h 3.11 l 27.26,-5.17 v -6.67 l -3.82,-0.3 c -6.37,-0.6 -8.02,-1.91 -8.02,-7.12 v -47.55 l 0.75,-15.26 h -4.31 l -25.76,3.71 v 6.52 l 2.51,0.45 c 6.97,1.01 9.04,2.96 9.04,7.84 v 42.37 c -6.67,5.17 -13.05,8.44 -20.62,8.44 -8.4,0 -13.61,-4.27 -13.61,-14.25 v -39.79 l 0.75,-15.26 h -4.42 l -25.8,3.71 v 6.52 l 2.66,0.45 c 6.97,1.01 9.04,2.96 9.04,7.84 v 39.11 c 0,16.57 9.37,24.45 24.3,24.45 11.4,0 20.74,-6.07 27.75,-14.51 l -0.75,14.51 -0.04,-0.04 z M 484.3,306.36 c 0,-21.19 -11.25,-29.32 -31.57,-29.32 -17.92,0 -30.94,7.42 -30.94,19.72 0,3.67 1.31,6.49 3.97,8.44 l 13.65,-1.8 c -0.6,-4.12 -0.9,-6.64 -0.9,-7.69 0,-6.97 3.71,-10.5 11.25,-10.5 11.14,0 16.76,7.84 16.76,20.44 v 4.12 l -28.12,8.44 c -9.37,2.55 -14.7,4.76 -18.26,9.94 -1.89,3.17 -2.8,6.82 -2.62,10.5 0,12 8.25,20.47 22.35,20.47 10.2,0 19.24,-4.61 27.11,-13.35 2.81,8.74 7.12,13.35 14.81,13.35 6.22,0 11.85,-2.51 16.87,-7.42 l -1.5,-5.17 c -2.17,0.6 -4.27,0.9 -6.49,0.9 -4.31,0 -6.37,-3.41 -6.37,-10.09 v -30.97 z m -36,40.76 c -7.69,0 -12.45,-4.46 -12.45,-12.3 0,-5.32 2.51,-8.44 7.87,-10.24 l 22.8,-7.24 v 21.9 c -7.27,5.51 -11.55,7.87 -18.22,7.87 z m 237.36,6.82 v -6.67 l -3.86,-0.3 c -6.37,-0.6 -7.99,-1.91 -7.99,-7.12 v -89.47 l 0.75,-12.75 h -5.36 l -23.7,7.12 v 3.86 l 10.5,4.87 v 29.32 c -5.91,-4.05 -12.98,-6.08 -20.14,-5.77 -23.55,0 -41.92,17.92 -41.92,44.74 0,22.09 13.2,37.35 34.95,37.35 11.25,0 21.04,-5.47 27.11,-13.95 l -0.75,13.95 h 3.15 l 27.26,-5.17 v 0 z m -49.35,-68.02 c 11.25,0 19.69,6.52 19.69,18.52 v 33.75 c -5.18,5.16 -12.23,8 -19.54,7.87 -16.12,0 -24.3,-12.75 -24.3,-29.77 0,-19.12 9.34,-30.37 24.15,-30.37 z M 743.3,302.8 c -2.1,-9.9 -8.17,-15.52 -16.61,-15.52 -12.6,0 -21.34,9.49 -21.34,23.1 0,20.14 10.65,33.19 27.86,33.19 11.48,-0.12 22.04,-6.33 27.71,-16.31 l 5.02,1.35 c -2.25,17.47 -18.07,30.52 -37.5,30.52 -22.8,0 -38.51,-16.87 -38.51,-40.87 0,-24 17.06,-41.21 39.86,-41.21 17.02,0 29.02,10.24 32.89,28.01 l -59.4,18.22 v -8.02 l 40.01,-12.41 v -0.04 z",
                    }),
                  ],
                }),
              }),
            }),
            jsxs("div", {
              ref: r,
              style: OVERLAY_STYLE,
              children: [
                jsxs("svg", {
                  width: "9.5",
                  height: "9.5",
                  viewBox: "285 285 1836 1836",
                  style: { display: "block", flex: "none" },
                  children: [
                    jsx("path", {
                      id: "hbOai",
                      fill: "#FFFFFF",
                      d: "M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z",
                    }),
                    jsx("use", {
                      href: "#hbOai",
                      transform: "rotate(60 1203 1203)",
                    }),
                    jsx("use", {
                      href: "#hbOai",
                      transform: "rotate(120 1203 1203)",
                    }),
                    jsx("use", {
                      href: "#hbOai",
                      transform: "rotate(180 1203 1203)",
                    }),
                    jsx("use", {
                      href: "#hbOai",
                      transform: "rotate(240 1203 1203)",
                    }),
                    jsx("use", {
                      href: "#hbOai",
                      transform: "rotate(300 1203 1203)",
                    }),
                  ],
                }),
                jsx("span", {
                  style: {
                    font: "600 6.5px/1 -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
                    color: "#E9E4D8",
                    letterSpacing: "0.02em",
                    marginLeft: 3,
                  },
                  children: "ChatGPT",
                }),
              ],
            }),
            jsx("div", {
              ref: i,
              style: OVERLAY_STYLE,
              children: jsx("span", {
                style: {
                  font: "700 6px/1 'Orbitron', sans-serif",
                  color: "#FFFFFF",
                  letterSpacing: "0.28em",
                },
                children: "NEURONEUS",
              }),
            }),
            jsxs("div", {
              ref: o,
              style: OVERLAY_STYLE,
              children: [
                jsx("svg", {
                  width: "7",
                  height: "7",
                  viewBox: "0 0 100 100",
                  style: { display: "block", flex: "none" },
                  children: jsx("polygon", {
                    points: "30,2 70,2 98,30 98,70 70,98 30,98 2,70 2,30",
                    fill: "#FFFFFF",
                    mask: "url(#hbOmk)",
                  }),
                }),
                jsx("span", {
                  style: {
                    font: "700 5px/1 'Orbitron', sans-serif",
                    color: "#FFFFFF",
                    letterSpacing: "0.22em",
                    marginLeft: 2.5,
                  },
                  children: "NEURONEUS",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

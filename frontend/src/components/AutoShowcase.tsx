import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const THEMES = [
  { name: "FIROZI", bg: "#4f9c93", arch: "#f4e3c1", body: "#d33f7a", roof: "#f0b13a", rib: "#d9772b", interior: "#2b6f6a", glass: "#a8d8cb", rim: "#3f5fb0", ground: "#3c837b" },
  { name: "GULABI", bg: "#f0c1d6", arch: "#fbf1dc", body: "#2f8f83", roof: "#eab543", rib: "#c8662f", interior: "#7a2a55", glass: "#fbf1dc", rim: "#d33f7a", ground: "#dfa5bf" },
  { name: "SARSON", bg: "#eab543", arch: "#fbf1dc", body: "#d33f55", roof: "#2f8f83", rib: "#1f6b62", interior: "#3a1424", glass: "#fbf1dc", rim: "#3f5fb0", ground: "#c8942a" },
];

function playHonk() {
  try {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    gain.connect(ctx.destination);
    ([[700, 0, 0.12], [540, 0.15, 0.16]] as const).forEach(([freq, start, dur]) => {
      const osc = ctx.createOscillator();
      osc.type = "square";
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    });
    window.setTimeout(() => void ctx.close(), 800);
  } catch {
    return;
  }
}

export default function AutoShowcase() {
  const [theme, setTheme] = useState(2);
  const [hover, setHover] = useState(false);
  const [honking, setHonking] = useState(false);
  const [honks, setHonks] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    []
  );

  const t = THEMES[theme];
  const next = THEMES[(theme + 1) % THEMES.length];

  const honk = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setHonking(true);
    setHonks((h) => h + 1);
    playHonk();
    timer.current = window.setTimeout(() => setHonking(false), 950);
  };

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    });
  };

  const captionTitle = honking ? `PEEP PEEP / ${t.name}` : hover ? "HORN OK PLEASE" : `DELHI ON WHEELS / ${t.name}`;
  const captionSub = honking ? "DILLI DOES NOT WAIT" : hover ? "CLICK TO HONK" : "CLICK THE AUTO TO HONK";
  const tr = "transform .25s ease-out";

  return (
    <div data-testid="auto-showcase" className="relative w-full max-w-[420px]">
      <div className="rounded-t-[210px] border-2 border-linegold p-3.5">
        <div className="rounded-t-[194px] border-2 border-linepink p-3.5">
          <div
            className="relative aspect-[356/616] w-full overflow-hidden rounded-t-[178px] transition-[background] duration-500"
            style={{ background: t.bg }}
            onMouseMove={onMove}
            onMouseLeave={() => {
              setPos({ x: 0, y: 0 });
              setHover(false);
            }}
          >
            <div
              className={`absolute -inset-5 opacity-[0.16] ${hover ? "animate-[dhdrift_1s_linear_infinite]" : ""}`}
              style={{
                background:
                  "radial-gradient(#1c0a10 1.5px, transparent 2.2px) 0 0/14px 14px, radial-gradient(#fbf1dc 1.2px, transparent 1.8px) 7px 7px/14px 14px",
              }}
              aria-hidden="true"
            />

            <svg viewBox="0 0 356 616" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <rect x="0" y="536" width="356" height="80" fill={t.ground} />

              <g style={{ transform: `translate(${(-pos.x * 6).toFixed(1)}px, ${(-pos.y * 4).toFixed(1)}px)`, transition: tr }}>
                <path d="M70 268 L70 160 C70 104 122 72 178 26 C 234 72 286 104 286 160 L286 268 Z" fill={t.arch} />
                <path
                  d="M92 268 L92 164 C92 118 138 90 178 52 C 218 90 264 118 264 164 L264 268"
                  fill="none"
                  stroke={t.roof}
                  strokeWidth="3"
                  strokeDasharray="1 9"
                  strokeLinecap="round"
                />
                <g
                  style={{
                    transform: honking ? "scale(1.12)" : "scale(1)",
                    transformBox: "fill-box",
                    transformOrigin: "50% 90%",
                    transition: "transform .4s cubic-bezier(.3,1.6,.5,1)",
                  }}
                >
                  {[-64, -34, 0, 34, 64].map((deg, i) => (
                    <path
                      key={deg}
                      d="M178 196 C 158 164, 164 122, 178 100 C 192 122, 198 164, 178 196 Z"
                      transform={`rotate(${deg} 178 196)`}
                      fill={i % 2 === 0 ? "#f28ab8" : "#d9489b"}
                      stroke="#fbf1dc"
                      strokeWidth="2"
                    />
                  ))}
                  <path
                    d="M120 200 C 140 190, 160 196, 178 198 C 196 196, 216 190, 236 200 C 216 210, 196 208, 178 206 C 160 208, 140 210, 120 200 Z"
                    fill={t.ground}
                  />
                </g>
              </g>

              <g style={{ transform: `translate(${(pos.x * 8).toFixed(1)}px, ${(pos.y * 3).toFixed(1)}px)`, transition: tr }}>
                <g className={honking ? "animate-[dhhop_.45s_ease-out]" : undefined}>
                  <g className={hover ? "animate-[dhbob_.3s_ease-in-out_infinite_alternate]" : undefined}>
                    <g transform="translate(13,262) scale(1.1)">
                      <ellipse cx="160" cy="258" rx="150" ry="11" fill="#1c0a10" fillOpacity="0.22" />
                      <path d="M18 100 C 14 52, 72 14, 150 12 C 214 10, 258 44, 268 100 Z" fill={t.roof} />
                      {[
                        "M62 100 C 60 60, 97 30, 119 13",
                        "M102 100 C 98 60, 121 30, 133 13",
                        "M142 100 C 136 60, 145 30, 147 13",
                        "M182 100 C 174 60, 169 30, 161 13",
                        "M222 100 C 212 60, 193 30, 175 13",
                      ].map((d) => (
                        <path key={d} d={d} fill="none" stroke={t.rib} strokeWidth="3" strokeLinecap="round" />
                      ))}
                      {[22, 62, 102, 142, 182, 222].map((x) => (
                        <path key={x} d={`M${x} 100 A 20 13 0 0 0 ${x + 40} 100 Z`} fill={t.roof} stroke={t.rib} strokeWidth="2.5" />
                      ))}
                      {Array.from({ length: 18 }).map((_, i) => (
                        <circle key={i} cx={34 + i * 14} cy="123" r="3" fill="#fbf1dc" />
                      ))}
                      <path
                        d="M24 112 L262 112 L270 168 C 272 186, 262 196, 250 196 L 46 196 C 32 196 24 188 24 176 Z"
                        fill={t.body}
                      />
                      <rect x="96" y="134" width="96" height="52" rx="8" fill={t.interior} />
                      <path d="M104 186 C 100 160, 120 146, 140 150 C 138 172, 124 184, 104 186 Z" fill="#62bf9c" />
                      <path d="M150 186 C150 164, 168 150, 186 156 C 184 176, 170 186, 150 186 Z" fill="#eab543" />
                      <circle cx="146" cy="146" r="4" fill="#d9489b" />
                      <rect x="192" y="130" width="10" height="62" fill={t.roof} />
                      <path d="M202 134 L248 134 L256 176 L202 176 Z" fill={t.glass} />
                      <path d="M208 170 C 220 150, 236 146, 252 148" fill="none" stroke="#d9489b" strokeWidth="5" strokeLinecap="round" />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <ellipse
                          key={i}
                          cx="58"
                          cy="146"
                          rx="6"
                          ry="14"
                          transform={`rotate(${i * 45} 58 158)`}
                          fill={i % 2 === 0 ? "#eab543" : "#fbf1dc"}
                        />
                      ))}
                      <circle cx="58" cy="158" r="6" fill="#d9489b" />
                      {Array.from({ length: 6 }).map((_, i) => (
                        <circle key={i} cx={34 + i * 10} cy="190" r="2.2" fill="#fbf1dc" />
                      ))}
                      <rect x="128" y="186" width="60" height="10" rx="2" fill="#fbf1dc" />
                      <text
                        x="158"
                        y="193.6"
                        textAnchor="middle"
                        fontFamily="'Geist Mono Variable', monospace"
                        fontWeight="700"
                        fontSize="5.6"
                        letterSpacing="0.6"
                        fill="#1c0a10"
                      >
                        HORN OK PLEASE
                      </text>

                      {[
                        { cx: 86, cy: 216, r: 40 },
                        { cx: 240, cy: 218, r: 38 },
                      ].map((w) => (
                        <g
                          key={w.cx}
                          className="dhwheel"
                          style={{ animation: `dhwheel ${hover ? "0.45s" : "2.4s"} linear infinite` }}
                        >
                          <circle cx={w.cx} cy={w.cy} r={w.r} fill="#1c0a10" />
                          <circle cx={w.cx} cy={w.cy} r={w.r - 6} fill={t.rim} />
                          <circle cx={w.cx} cy={w.cy} r={w.r - 12} fill="#fbf1dc" />
                          <circle cx={w.cx} cy={w.cy} r={w.r - 15} fill={t.rim} />
                          {Array.from({ length: 8 }).map((_, i) => {
                            const a = (i * Math.PI) / 4;
                            const inner = w.r - 15;
                            return (
                              <line
                                key={i}
                                x1={w.cx}
                                y1={w.cy}
                                x2={w.cx + Math.cos(a) * inner}
                                y2={w.cy + Math.sin(a) * inner}
                                stroke="#fbf1dc"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                              />
                            );
                          })}
                          <circle cx={w.cx} cy={w.cy} r="6" fill={t.body} stroke="#eab543" strokeWidth="2" />
                        </g>
                      ))}

                      <path d="M200 192 C 206 166, 274 166, 282 192" fill="none" stroke={t.body} strokeWidth="8" strokeLinecap="round" />
                      <circle cx="274" cy="174" r="9" fill="#fbf1dc" stroke={t.rim} strokeWidth="2.5" />
                      <circle cx="274" cy="174" r="5" fill="#eab543" />
                      <circle cx="274" cy="174" r="16" fill="#eab543" fillOpacity={honking ? 0.55 : 0} style={{ transition: "fill-opacity .2s" }} />
                      <path d="M256 112 L256 130" stroke="#1c0a10" strokeWidth="1.5" />
                      <path d="M250 130 h12 l-2 12 h-8 z" fill="#eab543" />
                      <circle cx="256" cy="136" r="14" fill="#eab543" fillOpacity={honking ? 0.55 : 0} style={{ transition: "fill-opacity .2s" }} />
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <button
              type="button"
              aria-label="Honk the horn"
              data-testid="auto-honk-button"
              onClick={honk}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onFocus={() => setHover(true)}
              onBlur={() => setHover(false)}
              className="absolute cursor-pointer rounded-3xl"
              style={{ left: "15.7%", top: "44.6%", width: "80%", height: "43.5%" }}
            />

            {honking && (
              <>
                <div
                  className="pointer-events-none absolute h-[60px] w-[60px] rounded-full border-[3px] border-linecream"
                  style={{ left: "calc(84% - 30px)", top: "calc(68% - 30px)", animation: "dhring 0.9s ease-out forwards" }}
                />
                <div
                  className="pointer-events-none absolute h-[60px] w-[60px] rounded-full border-[3px] border-linepink"
                  style={{ left: "calc(84% - 30px)", top: "calc(68% - 30px)", animation: "dhring 0.9s 0.18s ease-out forwards" }}
                />
                <div
                  className="pointer-events-none absolute rounded-[10px] rounded-br-[2px] bg-linecream px-3 py-2 font-mono text-[13px] font-bold tracking-[0.1em] text-[#1c0a10] shadow-[3px_3px_0_#1c0a10]"
                  style={{ left: "63.5%", top: "63%", animation: "dhpop 0.35s cubic-bezier(.3,1.6,.5,1)" }}
                >
                  PEEP PEEP!
                </div>
              </>
            )}

            <button
              type="button"
              data-testid="auto-repaint-button"
              onClick={() => setTheme((v) => (v + 1) % THEMES.length)}
              aria-label={`Repaint the auto in ${next.name.toLowerCase()}`}
              className="absolute flex h-11 w-36 cursor-pointer items-center justify-between rounded-full border-2 border-[#1c0a10] bg-linecream px-3.5 font-mono text-[11px] font-bold tracking-[0.14em] text-[#1c0a10] shadow-[3px_3px_0_#1c0a10] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ left: "calc(50% - 72px)", top: "36%" }}
            >
              <span>REPAINT</span>
              <span className="flex gap-1">
                {THEMES.map((th, i) => (
                  <span
                    key={th.name}
                    className="block h-3 w-3 rounded-full border-2 border-[#1c0a10]"
                    style={{
                      background: th.body,
                      boxShadow: i === theme ? "0 0 0 2px #fbf1dc, 0 0 0 4px #1c0a10" : undefined,
                    }}
                  />
                ))}
              </span>
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#1c0a10]/92 px-4 pt-2.5 pb-3 font-mono tracking-[0.16em]">
              <div className="flex justify-between gap-2.5 text-xs text-linegold">
                <span data-testid="auto-caption">{captionTitle}</span>
                <span className="text-linepink" data-testid="auto-honk-count">
                  {honks} {honks === 1 ? "HONK" : "HONKS"}
                </span>
              </div>
              <div className="mt-1 text-[10px] tracking-[0.1em] text-linemute">{captionSub}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

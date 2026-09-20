const STALL_COLORS = ["#F59E0B", "#EC4899", "#10B981", "#FBBF24", "#A82E40", "#0D9488"];

export function Jhumka({ className, id = "jg" }: { className?: string; id?: string }) {
  const beads = [34, 47, 60, 73, 86];
  return (
    <svg viewBox="0 0 120 190" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <path d="M60 4c10 0 14 7 14 14" stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="24" r="5" fill={`url(#${id})`} />
      <line x1="60" y1="29" x2="60" y2="38" stroke={`url(#${id})`} strokeWidth="3" />
      <path d="M30 86 C30 50 90 50 90 86 L30 86 Z" fill={`url(#${id})`} />
      <path d="M38 76 C44 62 76 62 82 76" stroke="#7C2D12" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="60" cy="68" r="6" fill="#EC4899" stroke="#FDE68A" strokeWidth="1.5" />
      {beads.map((x) => (
        <circle key={x} cx={x} cy={86} r="5.5" fill={`url(#${id})`} stroke="#7C2D12" strokeOpacity="0.5" />
      ))}
      {beads.map((x, i) => (
        <g key={`s-${x}`}>
          <line x1={x} y1="92" x2={x} y2={118 + (i % 2) * 10} stroke="#F59E0B" strokeWidth="1.4" strokeOpacity="0.85" />
          <circle cx={x} cy={110 + (i % 2) * 8} r="2.4" fill="#FDE68A" />
          <circle cx={x} cy={122 + (i % 2) * 10} r="4" fill={i === 2 ? "#EC4899" : `url(#${id})`} />
        </g>
      ))}
      <line x1="60" y1="128" x2="60" y2="150" stroke="#F59E0B" strokeWidth="1.4" strokeOpacity="0.85" />
      <circle cx="60" cy="156" r="5" fill="#10B981" stroke="#FDE68A" strokeWidth="1.2" />
    </svg>
  );
}

export function AutoRickshaw({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 92" className={className} fill="none" aria-hidden="true">
      <path d="M24 26 Q70 4 116 26 L116 58 L24 58 Z" fill="#F59E0B" stroke="#1A0609" strokeWidth="2.5" />
      <path d="M24 26 Q70 4 116 26" stroke="#FDE68A" strokeWidth="3" strokeOpacity="0.8" />
      <rect x="40" y="30" width="26" height="20" rx="3" fill="#140608" stroke="#FDE68A" strokeWidth="1.5" />
      <rect x="74" y="30" width="26" height="20" rx="3" fill="#140608" stroke="#FDE68A" strokeWidth="1.5" />
      <rect x="18" y="58" width="104" height="10" rx="3" fill="#10B981" stroke="#1A0609" strokeWidth="2" />
      <circle cx="42" cy="74" r="9" fill="#1A0609" stroke="#F59E0B" strokeWidth="2.5" />
      <circle cx="98" cy="74" r="9" fill="#1A0609" stroke="#F59E0B" strokeWidth="2.5" />
      <circle cx="70" cy="78" r="6" fill="#1A0609" stroke="#F59E0B" strokeWidth="2" />
      <circle cx="118" cy="48" r="4" fill="#FDE68A" />
    </svg>
  );
}

export function AutoBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex flex-col overflow-hidden rounded border-2 border-[#1c0a10] font-mono text-[13px] font-bold tracking-[0.12em] uppercase shadow-[3px_3px_0_#1c0a10] ${className ?? ""}`}
    >
      <span className="block h-[5px] w-full bg-linegreen" />
      <span className="block bg-linegold px-4 py-2 text-[#1c0a10]">{text}</span>
    </span>
  );
}

export function StallMap({ className }: { className?: string }) {
  const stalls: { x: number; y: number; w: number; h: number; c: string; glow: boolean }[] = [];
  let k = 0;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      const isLane = col === 2 && row % 2 === 0;
      if (isLane) continue;
      stalls.push({
        x: 18 + col * 66,
        y: 16 + row * 62,
        w: 46,
        h: 40,
        c: STALL_COLORS[k % STALL_COLORS.length],
        glow: k % 5 === 0,
      });
      k++;
    }
  }
  return (
    <svg viewBox="0 0 420 280" className={className} fill="none" aria-hidden="true">
      <rect width="420" height="280" fill="#1D060A" />
      <path d="M0 140 H420" stroke="#852636" strokeWidth="10" strokeOpacity="0.6" />
      <path d="M210 0 V280" stroke="#852636" strokeWidth="10" strokeOpacity="0.5" strokeDasharray="14 10" />
      {stalls.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="3" fill={s.c} fillOpacity={s.glow ? 0.55 : 0.28} stroke={s.c} strokeOpacity="0.8" strokeWidth="1.4" className={s.glow ? "animate-stallglow" : undefined} />
          <line x1={s.x + 6} y1={s.y + 10} x2={s.x + s.w - 6} y2={s.y + 10} stroke={s.c} strokeOpacity="0.7" strokeWidth="2" />
          <line x1={s.x + 6} y1={s.y + 20} x2={s.x + s.w - 14} y2={s.y + 20} stroke={s.c} strokeOpacity="0.5" strokeWidth="2" />
        </g>
      ))}
      <circle cx="210" cy="140" r="7" fill="#EC4899" className="animate-stallglow" />
      <circle cx="210" cy="140" r="14" stroke="#EC4899" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 4" />
    </svg>
  );
}

export function ArchDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 26" className={className} fill="none" preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: 15 }).map((_, i) => (
        <path key={i} d={`M${i * 40} 26 Q${i * 40 + 20} 0 ${i * 40 + 40} 26`} stroke="#F59E0B" strokeOpacity="0.7" strokeWidth="1.6" />
      ))}
    </svg>
  );
}

export function FiligreeCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" aria-hidden="true">
      <path d="M2 58 V14 Q2 2 14 2 H58" stroke="#FBBF24" strokeWidth="2" strokeOpacity="0.85" />
      <path d="M10 58 V22 Q10 10 22 10 H58" stroke="#EC4899" strokeWidth="1.4" strokeOpacity="0.6" />
      <circle cx="14" cy="14" r="3" fill="#F59E0B" />
    </svg>
  );
}

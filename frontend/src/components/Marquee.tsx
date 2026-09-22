import { useEffect, useRef } from "react";

const DEFAULT_ITEMS = [
  "संज्ञा त्यागी",
  "Sangya Tyagi",
  "Generative AI & Media",
  "University of Westminster",
  "AFHEA",
  "Guest Lecturer",
  "हॉर्न ओके प्लीज़",
  "Delhi Haat Vibes",
  "Jhumka Sway",
  "Researcher • Artist",
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  className,
  variant = "dark",
}: {
  items?: string[];
  className?: string;
  variant?: "dark" | "gold" | "pink";
}) {
  const row = items.join("  ✦  ") + "  ✦  ";
  const strip =
    variant === "gold"
      ? "border-y-[3px] border-[#1c0a10] bg-[#eab543]"
      : variant === "pink"
        ? "border-y-[3px] border-[#1c0a10] bg-[#d9489b]"
        : "border-y-2 border-marigold/40 bg-[#1D060A]";
  const text =
    variant === "dark" ? "font-editorial text-amber-200/90" : "font-mono font-bold text-[#1c0a10]";

  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    let x = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const el = trackRef.current;
      if (el) {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          const dt = Math.min(t - last, 100);
          x -= (dt / 1000) * (half / 46);
          if (x <= -half) x += half;
          el.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
        }
      }
      last = t;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      data-testid="marquee-ribbon"
      className={`overflow-hidden py-3 ${strip} ${className ?? ""}`}
    >
      <div
        ref={trackRef}
        className={`marquee-track flex w-max whitespace-nowrap text-sm uppercase tracking-[0.28em] will-change-transform ${text}`}
      >
        <span className="pr-6">{row}</span>
        <span className="pr-6" aria-hidden="true">{row}</span>
      </div>
    </div>
  );
}

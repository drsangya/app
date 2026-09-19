const DEFAULT_ITEMS = [
  "संग्या त्यागी",
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
}: {
  items?: string[];
  className?: string;
}) {
  const row = items.join("  ✦  ") + "  ✦  ";
  return (
    <div
      data-testid="marquee-ribbon"
      className={`overflow-hidden border-y-2 border-marigold/40 bg-[#1D060A] py-3 ${className ?? ""}`}
    >
      <div className="marquee-track flex w-max whitespace-nowrap font-editorial text-sm uppercase tracking-[0.28em] text-amber-200/90">
        <span className="pr-6">{row}</span>
        <span className="pr-6" aria-hidden="true">{row}</span>
      </div>
    </div>
  );
}

import Marquee from "./Marquee";
import { AutoBadge, AutoRickshaw } from "./Ornaments";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="mt-24">
      <Marquee />
      <div className="jali-bg border-b border-marigold/20 bg-panel px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <AutoRickshaw className="h-16 w-24" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <AutoBadge text="Horn OK Please" />
            <AutoBadge text="PhD on Meter" />
            <AutoBadge text="Nazar Na Lage" />
          </div>
          <p className="max-w-md font-editorial text-sm leading-relaxed text-sand">
            Researched in London, raised on Delhi's bazaars. Every pixel here is a
            stall in the haat of my work — browse slowly, bargain boldly.
          </p>
          <p className="font-mono text-xs tracking-[0.25em] text-sand/60 uppercase">
            © 2026 Sangya Tyagi · सज्ञा त्यागी · London
          </p>
        </div>
      </div>
    </footer>
  );
}

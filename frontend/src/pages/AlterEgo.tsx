import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Marquee from "@/components/Marquee";
import { MaskedLine, Reveal } from "@/components/Reveal";

const MENU = [
  { label: "Photography", right: "Frames", to: "/alter-ego/photography" },
  { label: "Illustration", right: "Drawings", to: "/alter-ego/illustrations" },
  { label: "Sketchbook", right: "Unfinished", to: "/alter-ego/sketchbook" },
  { label: "Kathak", right: "The First Art", to: "/alter-ego/kathak" },
];

export default function AlterEgo() {
  return (
    <div data-testid="alter-ego-page" className="relative overflow-hidden pt-24">
      <div className="jali-pink-bg absolute inset-0" aria-hidden="true" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 70 112 C 60 300, 104 420, 62 600 S 40 760, 92 800" fill="none" stroke="#d33f55" strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="112" r="7" fill="#d33f55" />
        <path d="M 600 800 C 800 720, 1000 830, 1390 720" fill="none" stroke="#d33f55" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-24 hidden w-[58%] lg:block"
        viewBox="0 0 800 120"
        fill="none"
        aria-hidden="true"
      >
        <path d="M 0 4 Q 400 110 800 4" stroke="#eab543" strokeWidth="10" strokeLinecap="round" strokeDasharray="0 20" />
        <path d="M 0 4 Q 400 110 800 4" stroke="#d9489b" strokeWidth="7" strokeLinecap="round" strokeDasharray="0 20" strokeDashoffset="-10" />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-16 px-6 py-14 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span
              data-testid="magenta-line-badge"
              className="inline-block rounded border-t-[5px] border-linegold bg-linepink px-4 py-2.5 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-[#1c0a10]"
            >
              Magenta Line / Outside Work Hours
            </span>
          </Reveal>

          <h1 className="mt-8 font-display font-black leading-[0.86] tracking-[-2px]">
            <MaskedLine delay={0.15} className="text-7xl text-linepink sm:text-8xl lg:text-[7.5rem]">
              ALTER
            </MaskedLine>
            <MaskedLine delay={0.3} className="text-7xl sm:text-8xl lg:text-[7.5rem]">
              <span className="text-outline-cream">EGO</span>
            </MaskedLine>
          </h1>

          <Reveal delay={0.55} className="mt-6 max-w-md">
            <p className="text-xl leading-relaxed text-[#eadfc6]">
              Photographs, drawings, and whatever I make when nobody is grading.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <nav
              data-testid="aaj-ka-menu"
              className="mt-10 w-full max-w-md rounded-md border-[3px] border-linegold bg-[#2a1119] px-7 py-6 shadow-[8px_8px_0_#9e2f5f]"
              aria-label="Alter ego menu"
            >
              <p className="mb-3 font-display text-3xl font-bold tracking-[0.04em] text-linegold">AAJ KA MENU</p>
              {MENU.map((m) => (
                <Link
                  key={m.label}
                  to={m.to}
                  data-testid={`menu-${m.label.toLowerCase()}`}
                  className="group flex items-baseline gap-2.5 py-2 font-mono text-sm tracking-[0.1em] text-linecream"
                >
                  <span className="transition-colors duration-200 group-hover:text-linegold">{m.label.toUpperCase()}</span>
                  <span className="flex-grow border-b-2 border-dotted border-linegold/70" />
                  <span className="font-bold text-linepink transition-transform duration-300 group-hover:-translate-y-0.5">
                    {m.right.toUpperCase()}
                  </span>
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Reveal delay={0.35}>
              <Link
                to="/alter-ego/photography"
                data-testid="collage-photography"
                className="block rotate-[-5deg] bg-linecream p-3.5 pb-2.5 shadow-[6px_8px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:rotate-0 hover:scale-[1.03]"
              >
                <img
                  src="assets/delhi-market.jpg"
                  alt="Delhi Haat market street photographed from inside the crowd"
                  className="aspect-[272/330] w-full object-cover"
                />
                <p className="pt-2.5 font-mono text-[13px] font-bold tracking-[0.14em] text-[#1c0a10]">
                  PHOTOGRAPHY / DELHI
                </p>
              </Link>
            </Reveal>
            <Reveal delay={0.45} className="sm:mt-10">
              <Link
                to="/alter-ego/illustrations"
                data-testid="collage-illustrations"
                className="block rotate-[4deg] bg-linepink p-5 shadow-[6px_8px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:rotate-0 hover:scale-[1.03]"
              >
                <svg viewBox="0 0 240 300" className="w-full" aria-hidden="true">
                  <path d="M20 296 L20 140 A100 100 0 0 1 220 140 L220 296" fill="none" stroke="#fbf1dc" strokeWidth="5" />
                  <path d="M52 296 L52 145 A68 68 0 0 1 188 145 L188 296" fill="none" stroke="#eab543" strokeWidth="5" />
                  <path d="M84 296 L84 150 A36 36 0 0 1 156 150 L156 296" fill="none" stroke="#1c0a10" strokeWidth="5" />
                  <circle cx="120" cy="60" r="9" fill="#1c0a10" />
                </svg>
                <p className="pt-2.5 font-mono text-[13px] font-bold tracking-[0.14em] text-[#1c0a10]">
                  [ ILLUSTRATION GOES HERE ]
                </p>
              </Link>
            </Reveal>
          </div>

          <div className="mt-8 flex items-end gap-6">
            <Reveal delay={0.55} className="w-64 shrink-0">
              <Link
                to="/alter-ego/art"
                data-testid="collage-art"
                className="flex h-44 rotate-[-2deg] items-end p-4 shadow-[6px_8px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:rotate-0 hover:scale-[1.03]"
                style={{ background: "repeating-linear-gradient(135deg, #eab543 0, #eab543 14px, #d69f2a 14px, #d69f2a 28px)" }}
              >
                <span className="bg-[#1c0a10] px-2.5 py-1.5 font-mono text-[13px] font-bold tracking-[0.14em] text-linegold">
                  [ ART / PAINTING ]
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.65}>
              <motion.img
                src="assets/chai-hand.png"
                alt="Illustration of a henna-decorated hand holding a glass of cutting chai"
                data-testid="chai-hand"
                whileHover={{ rotate: -4, y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="w-56 cursor-pointer drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)] sm:w-72"
              />
            </Reveal>
          </div>

          <Reveal delay={0.75} className="mt-10 text-center">
            <Link
              to="/"
              data-testid="back-to-work-line"
              className="inline-flex items-center gap-2.5 border-2 border-linegold px-5 py-3 font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-linegold transition-colors duration-300 hover:bg-linegold hover:text-[#1c0a10]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work Line
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mt-6 rotate-[1.2deg] scale-x-[1.02]">
        <Marquee
          variant="pink"
          items={[
            "Alter Ego Station",
            "Mind the Gap Between Work and Play",
            "Please Take All Your Belongings",
            "Doors Will Open on the Right",
          ]}
        />
      </div>
    </div>
  );
}

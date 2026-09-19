import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import Marquee from "@/components/Marquee";
import { Jhumka, AutoBadge, StallMap, ArchDivider } from "@/components/Ornaments";
import { MaskedLine, Reveal } from "@/components/Reveal";

const MARKET_IMG =
  "https://images.pexels.com/photos/33976900/pexels-photo-33976900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const AERIAL_IMG =
  "https://images.pexels.com/photos/25469898/pexels-photo-25469898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const AUTO_IMG =
  "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhdXRvJTIwcmlja3NoYXd8ZW58MHx8fHwxNzg5ODU4MzMyfDA&ixlib=rb-4.1.0&q=85";
const JHUMKA_IMG =
  "https://images.unsplash.com/photo-1651160670627-2896ddf7822f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5JTIwZWFycmluZ3N8ZW58MHx8fHwxNzg5ODU4MzM2fDA&ixlib=rb-4.1.0&q=85";

const CHAPTERS = [
  {
    no: "01",
    title: "The Researcher",
    hindi: "शोधकर्ता",
    body: "PhD candidate at the University of Westminster, dissecting how generative AI rewires media — its audiences, its industries, and the public policy that must keep pace.",
    img: AERIAL_IMG,
    to: "/research",
    cta: "Enter the research",
  },
  {
    no: "02",
    title: "The Teacher",
    hindi: "अध्यापिका",
    body: "AFHEA-certified guest lecturer steering Master's cohorts through qualitative, quantitative and mixed methods — and the ethics of Gen AI in academia.",
    img: AUTO_IMG,
    to: "/resume",
    cta: "Read the resume",
  },
  {
    no: "03",
    title: "The Alter Ego",
    hindi: "कलाकार",
    body: "Off the clock: paint, film frames and folklore-digital illustrations. The bazaar's loudest stall — maximalist, handmade, unapologetic.",
    img: JHUMKA_IMG,
    to: "/alter-ego/art",
    cta: "Unveil the alter ego",
  },
];

const STALLS = [
  { label: "Resume", hindi: "प्रवेश पत्र", to: "/resume", color: "#F59E0B" },
  { label: "Research", hindi: "शोध", to: "/research", color: "#EC4899" },
  { label: "Art", hindi: "कला", to: "/alter-ego/art", color: "#10B981" },
  { label: "Photography", hindi: "झलक", to: "/alter-ego/photography", color: "#0D9488" },
  { label: "Contact", hindi: "संपर्क", to: "/contact", color: "#FBBF24" },
];

const METERS = [
  { value: "6+", label: "Years in Higher Ed" },
  { value: "02", label: "Continents of Study" },
  { value: "03", label: "Int'l Conferences" },
  { value: "01", label: "PhD, Loading…" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 700], [0, 90]);
  const yMap = useTransform(scrollY, [0, 700], [0, -70]);

  return (
    <div data-testid="home-page">
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <motion.div style={{ y: yMap }} className="absolute inset-0 opacity-40" aria-hidden="true">
          <StallMap className="h-full w-full" />
        </motion.div>
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,6,8,0.75) 0%, rgba(34,10,14,0.92) 80%, rgba(20,6,8,1) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="mb-6 flex flex-wrap items-center gap-3">
              <AutoBadge text="Horn OK Please" />
              <AutoBadge text="Fare: PhD on Meter" />
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-rani">
                <MapPin className="h-3.5 w-3.5" /> London, England
              </span>
            </Reveal>

            <h1 className="font-display font-black leading-[0.95] tracking-tight">
              <MaskedLine delay={0.15} className="text-6xl text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
                SANGYA
              </MaskedLine>
              <MaskedLine delay={0.3} className="text-6xl sm:text-7xl lg:text-8xl">
                <span className="text-outline-gold">TYAGI</span>
              </MaskedLine>
              <MaskedLine delay={0.45} className="mt-3 font-editorial text-2xl tracking-[0.3em] text-rani sm:text-3xl">
                संग्या त्यागी
              </MaskedLine>
            </h1>

            <Reveal delay={0.65} className="mt-7 max-w-xl">
              <p className="text-base leading-relaxed text-sand sm:text-lg">
                PhD Candidate — <span className="text-goldleaf">Generative AI &amp; Media</span>, University of
                Westminster. AFHEA. Guest Lecturer. Researching public policy at the crossroads of machines
                that imagine and the societies that must govern them.
              </p>
            </Reveal>

            <Reveal delay={0.8} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/research"
                data-testid="hero-cta-research"
                className="group inline-flex items-center gap-2 border-2 border-goldleaf bg-marigold px-7 py-3 font-editorial text-sm font-bold uppercase tracking-[0.2em] text-[#1A0609] shadow-[5px_5px_0_#852636] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[7px_9px_0_#852636]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/alter-ego/art"
                data-testid="hero-cta-alter-ego"
                className="group inline-flex items-center gap-2 border-2 border-rani bg-transparent px-7 py-3 font-editorial text-sm font-bold uppercase tracking-[0.2em] text-rani transition-all duration-300 hover:-translate-y-1 hover:bg-rani hover:text-cream"
              >
                <Sparkles className="h-4 w-4" />
                Unveil Alter Ego
              </Link>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={0.5}>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -top-14 left-1/2 z-20 -translate-x-1/2">
                  <div className="jhumka-sway">
                    <Jhumka className="h-36 w-24 drop-shadow-[0_8px_20px_rgba(245,158,11,0.35)]" id="hero-jg" />
                  </div>
                </div>
                <motion.figure
                  style={{ y: yImg }}
                  className="gold-frame arch-clip relative mt-16 overflow-hidden"
                  data-testid="hero-market-frame"
                >
                  <img
                    src={MARKET_IMG}
                    alt="Bustling Indian market street from above, dense with stalls and colour"
                    className="h-[420px] w-full object-cover"
                    loading="eager"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#140608] to-transparent px-5 pb-4 pt-14 font-mono text-[10px] uppercase tracking-[0.3em] text-amber-200">
                    Delhi Haat — Bird's-Eye Archive
                  </figcaption>
                </motion.figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8" data-testid="manifesto-section">
        <Reveal>
          <p className="font-editorial text-xs uppercase tracking-[0.35em] text-rani">एक नज़र · The Manifesto</p>
          <h2 className="mt-3 font-display text-3xl font-black text-cream sm:text-4xl lg:text-5xl">
            One Bazaar, Three Stalls
          </h2>
        </Reveal>
        <ArchDivider className="mt-6 h-6 w-full max-w-md" />

        <div className="mt-14 space-y-20">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.no} delay={0.05}>
              <article
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
                data-testid={`manifesto-chapter-${ch.no}`}
              >
                <div className="md:col-span-5 md:[direction:ltr]">
                  <div className="gold-frame relative overflow-hidden">
                    <img src={ch.img} alt={ch.title} className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    <span className="absolute left-3 top-3 bg-lacquer/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-goldleaf">
                      Chapter {ch.no}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-7 md:[direction:ltr]">
                  <span className="font-display text-6xl font-black text-henna">{ch.no}</span>
                  <h3 className="mt-2 font-display text-3xl font-bold text-cream">
                    {ch.title} <span className="ml-2 font-editorial text-xl text-rani">{ch.hindi}</span>
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-sand">{ch.body}</p>
                  <Link
                    to={ch.to}
                    data-testid={`chapter-cta-${ch.no}`}
                    className="group mt-6 inline-flex items-center gap-2 font-editorial text-sm uppercase tracking-[0.2em] text-goldleaf transition-colors hover:text-cream"
                  >
                    {ch.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="paisley-grid border-y border-henna/60 bg-panel py-20" data-testid="bazaar-section">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-black text-cream sm:text-4xl">The Haat of My Work</h2>
            <p className="mt-3 font-editorial text-sm uppercase tracking-[0.3em] text-sand">
              Bird's-eye view · pick a stall
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {STALLS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <Link
                  to={s.to}
                  data-testid={`bazaar-stall-${s.label.toLowerCase()}`}
                  className="group block border-2 bg-crimsondeep p-1 transition-transform duration-300 hover:-translate-y-2"
                  style={{ borderColor: s.color }}
                >
                  <div
                    className="arch-clip flex h-28 items-center justify-center"
                    style={{ backgroundColor: `${s.color}26` }}
                  >
                    <span className="font-display text-5xl font-black" style={{ color: s.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="px-3 py-4 text-center">
                    <p className="font-display text-lg font-bold text-cream group-hover:text-goldleaf">{s.label}</p>
                    <p className="font-editorial text-xs tracking-[0.2em]" style={{ color: s.color }}>
                      {s.hindi}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8" data-testid="meter-stats">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {METERS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="border border-henna bg-crimsondeep p-6 text-center shadow-[6px_6px_0_#3B0D14]">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-rickshaw">Meter Reading</p>
                <p className="mt-3 font-display text-5xl font-black text-goldleaf">{m.value}</p>
                <p className="mt-2 text-sm text-sand">{m.label}</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="mx-auto mt-4 h-1 w-2/3 origin-left bg-gradient-to-r from-rickshaw via-goldleaf to-rani"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

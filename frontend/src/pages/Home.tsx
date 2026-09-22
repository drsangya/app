import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import Marquee from "@/components/Marquee";
import AutoShowcase from "@/components/AutoShowcase";
import { AutoBadge, ArchDivider } from "@/components/Ornaments";
import { MaskedLine, Reveal } from "@/components/Reveal";

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
    to: "/alter-ego",
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
  return (
    <div data-testid="home-page">
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="jali-bg absolute inset-0 opacity-70" aria-hidden="true" />
        <svg
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-[180px] xl:block"
          viewBox="0 0 200 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M52 96 C 52 260, 100 300, 62 430 S 24 640, 70 740 C 96 810, 172 810, 172 762 C 172 718, 112 722, 118 768"
            fill="none"
            stroke="#d33f55"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="52" cy="96" r="7" fill="#d33f55" />
        </svg>

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-wrap items-center gap-3.5">
              <AutoBadge text="Horn OK Please" />
              <AutoBadge text="Fare: PhD on Meter" />
              <span className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.16em] text-linepink">
                <MapPin className="h-4 w-4" /> LONDON, ENGLAND
              </span>
            </Reveal>

            <h1 className="mt-8 font-display font-black leading-[0.86] tracking-[-2px]">
              <MaskedLine delay={0.15} className="text-[4.5rem] text-linecream drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-[7rem] lg:text-[8.5rem]">
                SANGYA
              </MaskedLine>
              <MaskedLine delay={0.3} className="text-[4.5rem] sm:text-[7rem] lg:text-[8.5rem]">
                <span className="text-outline-gold">TYAGI</span>
              </MaskedLine>
              <MaskedLine delay={0.45} className="mt-6 font-editorial text-3xl leading-[1.6] text-linegreen sm:text-4xl lg:text-[2.75rem]">
                संज्ञा त्यागी
              </MaskedLine>
            </h1>

            <Reveal delay={0.65} className="mt-6 max-w-xl">
              <p className="text-lg leading-relaxed text-[#eadfc6] sm:text-[1.35rem] sm:leading-[1.5]">
                PhD candidate in <span className="text-linegold">Generative AI and Media</span>, University of
                Westminster. I study how policy keeps up with machines that imagine.
              </p>
              <p className="mt-3 font-mono text-[13px] tracking-[0.16em] text-linemute">AFHEA / GUEST LECTURER</p>
            </Reveal>

            <Reveal delay={0.8} className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                to="/research"
                data-testid="hero-cta-research"
                className="group inline-flex items-center gap-3 bg-linegold px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#1c0a10] shadow-[6px_6px_0_#9e2f5f] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_0_#9e2f5f]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/alter-ego"
                data-testid="hero-cta-alter-ego"
                className="inline-flex items-center gap-2 border-2 border-linepink px-6 py-[14px] font-mono text-sm font-bold uppercase tracking-[0.16em] text-linepink transition-colors duration-300 hover:bg-linepink hover:text-linecream"
              >
                Change to Alter Ego Line
              </Link>
            </Reveal>

            <Reveal delay={0.95} className="mt-8">
              <p
                className="flex items-center gap-3 font-mono text-[13px] tracking-[0.14em] text-linepink"
                data-testid="next-station-caption"
              >
                <ArrowDown className="h-4 w-4" />
                NEXT STATION: RESUME. DOORS WILL OPEN ON THE LEFT.
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={0.5}>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="relative mt-6">
                  <svg
                    className="pointer-events-none absolute -top-6 left-1/2 z-0 w-[112%] -translate-x-1/2"
                    viewBox="0 0 436 224"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M 4 220 A 214 214 0 0 1 432 220" stroke="#eab543" strokeWidth="10" strokeLinecap="round" strokeDasharray="0 20" />
                    <path d="M 4 220 A 214 214 0 0 1 432 220" stroke="#d9489b" strokeWidth="7" strokeLinecap="round" strokeDasharray="0 20" strokeDashoffset="-10" />
                  </svg>
                  <div className="relative z-10">
                    <AutoShowcase />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-10 -rotate-[1.2deg] scale-x-[1.02]">
        <Marquee
          variant="gold"
          items={["Sabar Ka Phal Meetha", "Do Not Follow, I Am Also Lost", "OK Tata Bye Bye", "See You at the Next Station"]}
        />
      </div>

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

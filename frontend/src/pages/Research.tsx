import { Microscope, Globe2, FileText, Presentation } from "lucide-react";
import Marquee from "@/components/Marquee";
import { AutoBadge, ArchDivider, StallMap } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

const KEY_AREAS = [
  {
    title: "Gen AI & Public Policy",
    hindi: "नीति",
    body: "How governance frameworks can keep pace with generative systems in news and media — with a Global South lens.",
    color: "#F59E0B",
  },
  {
    title: "Audiences & Industry",
    hindi: "जनता",
    body: "How audiences perceive synthetic media and how newsroom workflows absorb, resist or reroute around it.",
    color: "#EC4899",
  },
  {
    title: "Media Ethics & Bias",
    hindi: "न्याय",
    body: "Algorithmic representation, perceived bias in Indian news ecosystems, and accountability for machine-made culture.",
    color: "#10B981",
  },
];

const CONFERENCES = [
  {
    year: "2025",
    title: "10th International Conference on Communication & Media Studies",
    location: "Paris, France",
    topic: "Poster: primary PhD results on AI, journalism & media futures",
    org: "Common Ground Research Networks",
  },
  {
    year: "2024",
    title: "International Congress on AI",
    location: "Málaga, Spain",
    topic: "Talk: Modelling Issues around Governance and AI in the Global South",
    org: "Polo Digital",
  },
];

const PUBLICATIONS = [
  {
    year: "2021",
    outlet: "UTA Libraries",
    title: "Perceptions and Content of Traditional and Online News: An Analysis of Bias in Indian Media",
    detail: "Mixed-method study: 330-respondent survey + 10-day content analysis of two print and two digital outlets.",
  },
];

const METHODS = ["NVivo", "SPSS", "R", "Surveys", "Ethnography", "Content Analysis", "Algorithmic Auditing", "Mixed Methods"];

export default function Research() {
  return (
    <div data-testid="research-page" className="pt-16">
      <section className="relative overflow-hidden border-b border-henna/60 px-6 py-24 sm:px-8">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <StallMap className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-lacquer/70 via-panel/85 to-lacquer" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-3">
              <AutoBadge text="On the Meter: Ongoing" />
            </div>
            <p className="font-editorial text-xs uppercase tracking-[0.35em] text-rani">डॉक्टरेट की यात्रा · The Doctoral Journey</p>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight text-cream sm:text-5xl">
              Public Policy &amp; <span className="text-goldleaf">Generative AI</span> in Media
            </h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-sand">
              PhD at the University of Westminster, London (CAMRI) — researching how generative AI reshapes media
              for its audiences and its industry, and what public policy must do about it. Fieldwork across the
              Global North and South.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Generative AI", "Media Policy", "Global South", "शोध", "CAMRI", "Paris 2025", "Málaga 2024", "Algorithmic Auditing"]} />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
            <Microscope className="h-6 w-6 text-rani" /> Research Stalls
          </h2>
          <ArchDivider className="mt-4 h-5 w-64" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {KEY_AREAS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article
                className="group h-full border-2 bg-crimsondeep p-7 transition-transform duration-300 hover:-translate-y-2"
                style={{ borderColor: a.color }}
                data-testid={`research-area-${i}`}
              >
                <div className="arch-clip flex h-20 items-center justify-center" style={{ backgroundColor: `${a.color}22` }}>
                  <span className="font-editorial text-xl" style={{ color: a.color }}>{a.hindi}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-cream group-hover:text-goldleaf">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="jali-bg border-y border-henna/60 bg-panel py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
              <Presentation className="h-6 w-6 text-rani" /> Conference Circuit
            </h2>
            <ArchDivider className="mt-4 h-5 w-64" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {CONFERENCES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="gold-frame h-full bg-lacquer p-7" data-testid={`conference-item-${i}`}>
                  <div className="flex items-center justify-between">
                    <span className="bg-[#78350F] px-3 py-1 font-mono text-xs font-bold tracking-[0.2em] text-amber-100">{c.year}</span>
                    <span className="flex items-center gap-1.5 font-editorial text-xs uppercase tracking-[0.2em] text-rani">
                      <Globe2 className="h-3.5 w-3.5" /> {c.location}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-cream">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">{c.topic}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-sand/70">{c.org}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
            <FileText className="h-6 w-6 text-rani" /> Publication
          </h2>
          <ArchDivider className="mt-4 h-5 w-64" />
        </Reveal>
        {PUBLICATIONS.map((p, i) => (
          <Reveal key={p.title} delay={0.05}>
            <article className="mt-8 border-l-4 border-rani bg-wine p-7" data-testid={`publication-item-${i}`}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-rickshaw">{p.outlet} · {p.year}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-cream">{p.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sand">{p.detail}</p>
            </article>
          </Reveal>
        ))}

        <Reveal className="mt-14">
          <p className="font-editorial text-xs uppercase tracking-[0.3em] text-rani">Toolkit · हथियार</p>
          <div className="mt-5 flex flex-wrap gap-2.5" data-testid="methods-cloud">
            {METHODS.map((m) => (
              <span key={m} className="border border-marigold/50 bg-[#78350F] px-3.5 py-1.5 font-editorial text-xs uppercase tracking-[0.12em] text-amber-100">
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

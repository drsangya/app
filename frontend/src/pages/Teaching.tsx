import { Link } from "react-router-dom";
import { GraduationCap, Megaphone, Users, ArrowRight } from "lucide-react";
import Marquee from "@/components/Marquee";
import { AutoBadge, ArchDivider } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

const MODULES = [
  {
    code: "MA",
    title: "Digital Media Research Methods",
    org: "University of Westminster · Level 7",
    note: "Designing rigorous, ethical research for digital media questions.",
  },
  {
    code: "MA",
    title: "Data, Culture & Society",
    org: "University of Westminster · Level 7",
    note: "Where datasets meet lived culture — critical and hands-on.",
  },
  {
    code: "MA",
    title: "Research Consultancy Projects",
    org: "Business School & Tourism · Level 7",
    note: "Coaching student consultancies from brief to evidence-backed answer.",
  },
];

const TOPICS = [
  "Ethical Use of Gen AI in Academia",
  "Qualitative Research Methods",
  "Quantitative Research Methods",
  "Algorithmic Auditing",
  "Mixed-Method Design",
  "Reporting Quantitative Results",
];

export default function Teaching() {
  return (
    <div data-testid="teaching-page" className="pt-24">
      <section className="jali-bg border-b border-henna/60 bg-panel px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-5 flex items-center justify-center gap-3">
              <AutoBadge text="Mind the Gap · Now Teaching" />
            </div>
            <h1 className="font-display text-4xl font-black text-cream sm:text-5xl lg:text-6xl">
              Teaching <span className="font-editorial text-2xl font-medium text-rani sm:text-3xl">अध्यापन</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-sand">
              Guest Lecturer at the University of Westminster and AFHEA-certified — teaching innovative research
              methods, Gen AI in media, and quantitative methods to Master's cohorts. Students as co-creators,
              never passengers.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Guest Lecturer", "AFHEA", "अध्यापन", "Students as Co-Creators", "Research Methods", "Gen AI in Media"]} />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
            <GraduationCap className="h-6 w-6 text-rani" /> Modules &amp; Cohorts
          </h2>
          <ArchDivider className="mt-4 h-5 w-64" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {MODULES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <article
                className="group h-full border-2 border-henna bg-crimsondeep p-7 transition-all duration-300 hover:-translate-y-2 hover:border-marigold/60"
                data-testid={`module-item-${i}`}
              >
                <span className="inline-block bg-[#78350F] px-3 py-1 font-mono text-xs font-bold tracking-[0.25em] text-amber-100">
                  {m.code} · L7
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-cream group-hover:text-goldleaf">{m.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-rickshaw">{m.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-sand">{m.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="jali-bg border-y border-henna/60 bg-panel py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
              <Megaphone className="h-6 w-6 text-rani" /> On the Syllabus
            </h2>
            <ArchDivider className="mt-4 h-5 w-64" />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2.5" data-testid="topics-cloud">
            {TOPICS.map((topic, i) => (
              <span
                key={topic}
                className={`border px-3.5 py-1.5 font-editorial text-xs uppercase tracking-[0.12em] ${
                  i % 3 === 0
                    ? "border-marigold/60 bg-[#78350F] text-amber-100"
                    : i % 3 === 1
                      ? "border-rani/60 bg-[#831843] text-pink-100"
                      : "border-rickshaw/60 bg-[#064E3B] text-emerald-100"
                }`}
              >
                {topic}
              </span>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="gold-frame grid gap-8 bg-crimsondeep p-8 sm:p-10 md:grid-cols-2" data-testid="teaching-philosophy">
              <div>
                <p className="flex items-center gap-2 font-editorial text-xs uppercase tracking-[0.25em] text-rani">
                  <Users className="h-4 w-4" /> Teaching Philosophy
                </p>
                <p className="mt-4 leading-relaxed text-sand">
                  Classrooms work like a good haat: noisy, negotiated, and generous. I build sessions where
                  students co-create the knowledge — partnership over podium, methods you can touch over slides
                  you forget.
                </p>
              </div>
              <div className="border-l-4 border-goldleaf pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-rickshaw">Credential</p>
                <p className="mt-2 font-display text-2xl font-bold text-cream">AFHEA</p>
                <p className="mt-2 text-sm leading-relaxed text-sand">
                  Associate Fellow of the Higher Education Academy (Advance HE) — recognised for effective,
                  inclusive teaching practice in higher education.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <Link
              to="/contact"
              data-testid="teaching-cta-contact"
              className="group inline-flex items-center gap-2 border-2 border-goldleaf bg-marigold px-7 py-3 font-editorial text-sm font-bold uppercase tracking-[0.2em] text-[#1A0609] shadow-[5px_5px_0_#852636] transition-transform duration-300 hover:-translate-y-1"
            >
              Invite a Guest Lecture
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

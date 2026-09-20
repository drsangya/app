import { GraduationCap, Briefcase, BadgeCheck, BookOpen, Wrench, ArrowUpRight } from "lucide-react";
import Marquee from "@/components/Marquee";
import { AutoBadge, ArchDivider, FiligreeCorner } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

const EXPERIENCE = [
  {
    period: "Feb 2023 — Present",
    role: "Guest Lecturer",
    org: "University of Westminster · London",
    points: [
      "Level 7 cohorts: MA Digital Media Research Methods, MA Data Culture & Society, MA Research Consultancy",
      "Ethical use of Gen AI in academia; algorithmic auditing as a digital research method",
      "Qualitative, quantitative and mixed-method research design and reporting",
    ],
  },
  {
    period: "Nov 2022 — Present",
    role: "Student Partnership Administrative Assistant · CETI",
    org: "University of Westminster · London",
    points: [
      "Programme co-ordination and event co-creation for the Student Partnership team",
      "Data visualisation and quantitative analytics across education and finance systems",
    ],
  },
  {
    period: "2024",
    role: "Research Intern",
    org: "University of Westminster · London",
    points: [
      "Investigated media regulation across the Global South; prepared an international conference",
      "Legal analysis, web scraping, NVivo coding; reports with SPSS & R visualisation",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Field Researcher",
    org: "Political Sampark · New Delhi",
    points: [
      "Ethnography and surveys on voter behaviour and media consumerism across Delhi localities",
      "Translated interviews into concise reports for political media campaign designers",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Marketing & Business Development Executive",
    org: "Matrix Infosystems · Delhi",
    points: ["Brand, social and growth work across a full-funnel B2B portfolio"],
  },
  {
    period: "2020 — 2022",
    role: "Graduate Research Assistant",
    org: "University of Texas at Arlington · USA",
    points: [
      "NVivo and SPSS analyses across projects on Indian media and public perceptions",
      "Primary/secondary data collection, interview transcription, led project discussions",
    ],
  },
];

const EDUCATION = [
  {
    period: "2022 — 2026",
    degree: "PhD, Mass Communication / Media Studies",
    school: "University of Westminster, London",
    note: "Generative AI, public policy and media — audiences & industry",
  },
  {
    period: "2019 — 2021",
    degree: "MA, Communication",
    school: "University of Texas at Arlington, USA",
    note: "Thesis on bias in Indian traditional & online news",
  },
];

const CERTS = [
  { name: "AFHEA — Associate Fellow, Higher Education Academy", issuer: "Advance HE" },
  { name: "Advanced Social Media Strategy", issuer: "LinkedIn · 2021" },
  { name: "Human Subject Research (HSP)", issuer: "IRB UTA" },
];

const SKILLS = [
  "Guest Lecturing",
  "Quantitative Research",
  "Qualitative & Mixed Methods",
  "Media Research",
  "Gen AI Governance",
  "Data Analytics · SPSS · R",
  "NVivo",
  "Graphic Design",
  "Academic Writing",
  "Curriculum Design",
];

export default function Resume() {
  return (
    <div data-testid="resume-page" className="pt-16">
      <section className="jali-bg relative overflow-hidden border-b border-henna/60 bg-panel px-6 py-20 sm:px-8">
        <FiligreeCorner className="absolute left-3 top-3 h-14 w-14" />
        <FiligreeCorner className="absolute right-3 top-3 h-14 w-14 -scale-x-100" />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mb-5 flex items-center justify-center gap-3">
              <AutoBadge text="Curriculum Vitae" />
            </div>
            <h1 className="font-display text-4xl font-black text-cream sm:text-5xl lg:text-6xl">
              Sangya Tyagi <span className="font-editorial text-2xl font-medium text-rani sm:text-3xl">(She/Her)</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sand sm:text-lg">
              PhD Candidate &amp; AFHEA in Generative AI, Media &amp; Communication — 6+ years across higher
              education teaching, media research, publication and digital communication. London — Delhi — Texas.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Guest Lecturer", "AFHEA", "Media Research", "Quant + Qual", "शिक्षा", "Westminster", "UT Arlington"]} />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
              <Briefcase className="h-6 w-6 text-rani" /> Experience
            </h2>
            <ArchDivider className="mt-4 h-5 w-56" />
          </Reveal>
          <div className="mt-8 space-y-0 border-l-2 border-henna pl-8">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.05}>
                <article className="relative pb-10" data-testid={`experience-item-${i}`}>
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-goldleaf bg-lacquer" />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-rickshaw">{e.period}</p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-cream">{e.role}</h3>
                  <p className="text-sm font-semibold text-goldleaf">{e.org}</p>
                  <ul className="mt-3 list-none space-y-1.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-sand">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-rani" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf sm:text-3xl">
              <GraduationCap className="h-6 w-6 text-rani" /> Education
            </h2>
            <ArchDivider className="mt-4 h-5 w-56" />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.08}>
                <div className="gold-frame h-full bg-crimsondeep p-6" data-testid={`education-item-${i}`}>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-rickshaw">{ed.period}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-cream">{ed.degree}</h3>
                  <p className="mt-1 text-sm font-semibold text-goldleaf">{ed.school}</p>
                  <p className="mt-3 text-sm text-sand">{ed.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="space-y-12 lg:col-span-5">
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf">
              <Wrench className="h-6 w-6 text-rani" /> Skills Bazaar
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5" data-testid="skills-cloud">
              {SKILLS.map((s, i) => (
                <span
                  key={s}
                  className={`border px-3.5 py-1.5 font-editorial text-xs uppercase tracking-[0.12em] ${
                    i % 3 === 0
                      ? "border-marigold/60 bg-[#78350F] text-amber-100"
                      : i % 3 === 1
                        ? "border-rani/60 bg-[#831843] text-pink-100"
                        : "border-rickshaw/60 bg-[#064E3B] text-emerald-100"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf">
              <BadgeCheck className="h-6 w-6 text-rani" /> Certifications
            </h2>
            <div className="mt-6 space-y-4">
              {CERTS.map((c, i) => (
                <div key={c.name} className="border-l-4 border-goldleaf bg-wine px-5 py-4" data-testid={`certification-item-${i}`}>
                  <p className="font-editorial text-sm font-semibold text-cream">{c.name}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-sand/80">{c.issuer}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-goldleaf">
              <BookOpen className="h-6 w-6 text-rani" /> Publication
            </h2>
            <div className="gold-frame mt-6 bg-crimsondeep p-6" data-testid="publication-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-rickshaw">UTA Libraries · 2021</p>
              <p className="mt-2 font-display text-lg font-bold leading-snug text-cream">
                Perceptions and Content of Traditional and Online News: An Analysis of Bias in Indian Media
              </p>
              <p className="mt-3 text-sm leading-relaxed text-sand">
                Survey of 330 respondents paired with content analysis of The Times of India, Hindustan Times,
                FirstPost and The Scroll — tracing perceived and published bias across formats.
              </p>
              <a
                href="https://mavmatrix.uta.edu/communication_theses/50/"
                target="_blank"
                rel="noreferrer"
                data-testid="publication-link"
                className="group mt-4 inline-flex items-center gap-2 font-editorial text-sm uppercase tracking-[0.2em] text-goldleaf transition-colors hover:text-cream"
              >
                Read the thesis
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </aside>
      </section>
    </div>
  );
}

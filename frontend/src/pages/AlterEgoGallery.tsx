import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Brush, Camera, PenTool, NotebookPen, Footprints } from "lucide-react";
import Marquee from "@/components/Marquee";
import { AutoBadge, ArchDivider, Jhumka } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

type GalleryType = "art" | "photography" | "illustrations" | "sketchbook" | "kathak";

const GALLERIES: Record<
  GalleryType,
  { title: string; hindi: string; tag: string; note: string; accent: string; icon: typeof Brush; frames: string[] }
> = {
  art: {
    title: "Art & Painting",
    hindi: "कला",
    tag: "Original Acrylic",
    note: "Handmade and physical explorations — canvas, paper, and anything that holds pigment. The researcher steps away from the screen.",
    accent: "#F59E0B",
    icon: Brush,
    frames: ["Canvas 01", "Canvas 02", "Canvas 03", "Canvas 04", "Canvas 05", "Canvas 06"],
  },
  photography: {
    title: "Photography",
    hindi: "झलक",
    tag: "35mm Frame",
    note: "Urban drift and candid moments — Delhi's streets, London's light, and everything caught between the two.",
    accent: "#0D9488",
    icon: Camera,
    frames: ["Frame 01", "Frame 02", "Frame 03", "Frame 04", "Frame 05", "Frame 06"],
  },
  illustrations: {
    title: "Illustrations",
    hindi: "चित्रांकन",
    tag: "Vector & Diffusion Hybrid",
    note: "Folklore meets the machine — digital prints, truck-art florals, and Gen-AI hybrids studied by day, made by night.",
    accent: "#EC4899",
    icon: PenTool,
    frames: ["Print 01", "Print 02", "Print 03", "Print 04", "Print 05", "Print 06"],
  },
  sketchbook: {
    title: "Sketchbook",
    hindi: "स्केचबुक",
    tag: "Unfinished · WIP",
    note: "Margins, thumbnails and half-finished thoughts — the proudly unfinished shelf.",
    accent: "#62BF9C",
    icon: NotebookPen,
    frames: ["Page 01", "Page 02", "Page 03", "Page 04", "Page 05", "Page 06"],
  },
  kathak: {
    title: "Kathak",
    hindi: "कथक",
    tag: "The First Art",
    note: "Before the paint and the pixels there was dance — spins, tatkaar, and stories told in eight counts.",
    accent: "#FBBF24",
    icon: Footprints,
    frames: ["Piece 01", "Piece 02", "Piece 03", "Piece 04", "Piece 05", "Piece 06"],
  },
};

const PATTERNS = [
  "bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.35)_0_14%,transparent_15%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.3)_0_18%,transparent_19%)]",
  "bg-[repeating-linear-gradient(45deg,rgba(16,185,129,0.25)_0_10px,transparent_10px_22px)]",
  "bg-[radial-gradient(circle_at_50%_20%,rgba(251,191,36,0.3)_0_10%,transparent_11%),repeating-radial-gradient(circle_at_50%_100%,rgba(168,46,64,0.3)_0_12px,transparent_12px_26px)]",
  "bg-[repeating-conic-gradient(from_0deg,rgba(236,72,153,0.22)_0_15deg,transparent_15deg_30deg)]",
  "bg-[repeating-linear-gradient(-45deg,rgba(245,158,11,0.22)_0_8px,transparent_8px_20px),radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.3)_0_16%,transparent_17%)]",
  "bg-[radial-gradient(circle_at_20%_80%,rgba(168,46,64,0.4)_0_15%,transparent_16%),repeating-conic-gradient(from_45deg_at_70%_30%,rgba(251,191,36,0.2)_0_20deg,transparent_20deg_40deg)]",
];

export default function AlterEgoGallery() {
  const { type } = useParams<{ type: string }>();
  const [openFrame, setOpenFrame] = useState<number | null>(null);

  if (!type || !(type in GALLERIES)) {
    return <Navigate to="/alter-ego/art" replace />;
  }
  const g = GALLERIES[type as GalleryType];
  const Icon = g.icon;

  return (
    <div data-testid={`alter-ego-${type}-page`} className="pt-24">
      <section className="paisley-grid relative overflow-hidden border-b border-henna/60 bg-panel px-6 py-20 sm:px-8">
        <div className="pointer-events-none absolute -right-6 top-6 opacity-60">
          <div className="jhumka-sway">
            <Jhumka className="h-40 w-28" id={`ae-jg-${type}`} />
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <AutoBadge text="Alter Ego Unveiled" />
              <span className="font-editorial text-xs uppercase tracking-[0.3em] text-rani">दूसरा रूप</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-black text-cream sm:text-5xl lg:text-6xl">
              {g.title} <span className="font-editorial text-2xl font-medium sm:text-3xl" style={{ color: g.accent }}>{g.hindi}</span>
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-sand">{g.note}</p>
            <p className="mt-4 max-w-2xl font-editorial text-sm italic text-sand/80">
              Curator's note: these frames are dressed and waiting — Sangya's own works move in soon.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-3">
            {(Object.keys(GALLERIES) as GalleryType[]).map((t) => (
              <Link
                key={t}
                to={`/alter-ego/${t}`}
                data-testid={`gallery-switch-${t}`}
                className={`border px-4 py-2 font-editorial text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  t === type
                    ? "border-goldleaf bg-marigold text-[#1A0609]"
                    : "border-henna text-sand hover:border-marigold/60 hover:text-cream"
                }`}
              >
                {GALLERIES[t].title}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <Marquee items={[g.title, g.hindi, "नज़र न लगे", "Made by Night", g.tag, "Sangya Tyagi"]} />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <ArchDivider className="h-5 w-64" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {g.frames.map((label, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => setOpenFrame(i)}
                data-testid={`gallery-frame-${i}`}
                className="group block w-full text-left"
              >
                <div className="gold-frame relative overflow-hidden bg-crimsondeep p-3 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className={`relative aspect-[4/5] overflow-hidden border border-henna/70 bg-[#1D060A] ${PATTERNS[i % PATTERNS.length]}`}>
                    <div className="absolute inset-0 jali-bg opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <Icon className="h-9 w-9 transition-transform duration-500 group-hover:scale-125" style={{ color: g.accent }} />
                      <span className="font-display text-xl font-bold text-cream">{label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-sand/70">
                        Awaiting artwork
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-2 pt-3 pb-1">
                    <span className="font-editorial text-xs uppercase tracking-[0.2em]" style={{ color: g.accent }}>
                      {g.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand/60">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {openFrame !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-lacquer/90 p-6 backdrop-blur-md"
            onClick={() => setOpenFrame(null)}
            data-testid="lightbox-modal"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="gold-frame relative w-full max-w-md bg-crimsondeep p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenFrame(null)}
                data-testid="lightbox-close-button"
                className="absolute -right-3 -top-3 z-10 border border-goldleaf bg-lacquer p-2 text-goldleaf transition-colors hover:bg-marigold hover:text-[#1A0609]"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
              <div className={`relative aspect-[4/5] overflow-hidden border border-henna/70 bg-[#1D060A] ${PATTERNS[openFrame % PATTERNS.length]}`}>
                <div className="absolute inset-0 jali-bg opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <Icon className="h-12 w-12" style={{ color: g.accent }} />
                  <span className="font-display text-3xl font-bold text-cream">{g.frames[openFrame]}</span>
                </div>
              </div>
              <div className="px-2 pt-4 pb-1 text-center">
                <p className="font-editorial text-sm uppercase tracking-[0.25em]" style={{ color: g.accent }}>{g.tag}</p>
                <p className="mt-2 text-sm text-sand">
                  Placeholder frame — Sangya's own {g.title.toLowerCase()} will hang here soon.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

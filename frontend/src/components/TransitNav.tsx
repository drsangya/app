import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Jhumka } from "./Ornaments";

const STATIONS = [
  { to: "/", label: "HOME", x: 20, testid: "nav-tab-home" },
  { to: "/resume", label: "RESUME", x: 170, testid: "nav-tab-resume" },
  { to: "/research", label: "RESEARCH", x: 320, testid: "nav-tab-research" },
  { to: "/teaching", label: "TEACHING", x: 470, testid: "nav-tab-teaching" },
  { to: "/contact", label: "CONTACT", x: 620, testid: "nav-tab-contact" },
];

const ALTER_EGO = [
  { id: "art", label: "Art & Painting", desc: "Handmade & physical explorations" },
  { id: "photography", label: "Photography", desc: "Delhi streets & candid frames" },
  { id: "illustrations", label: "Illustrations", desc: "Folklore, digital & AI hybrids" },
  { id: "sketchbook", label: "Sketchbook", desc: "Margins & half-finished thoughts" },
  { id: "kathak", label: "Kathak", desc: "The first art — dance in eight counts" },
];

export default function TransitNav() {
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const alterActive = location.pathname.startsWith("/alter-ego");

  const activeX = alterActive ? 700 : (STATIONS.find((s) => s.to === location.pathname)?.x ?? 20);
  const activeY = alterActive ? 66 : 36;

  return (
    <header
      data-testid="site-navbar"
      className="fixed inset-x-0 top-0 z-50 border-b border-linegold/30 bg-[#1c0a10]/85 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-10">
        <Link to="/" data-testid="nav-logo" className="group flex items-center gap-3">
          <Jhumka className="h-10 w-7 transition-transform duration-500 group-hover:rotate-12" id="nav-jg" />
          <span className="font-display text-2xl font-bold tracking-tight text-linecream">
            Sangya <span className="text-linegold">Tyagi</span>
          </span>
        </Link>

        <div className="relative hidden lg:block" onMouseLeave={() => setDropOpen(false)}>
          <svg width="820" height="84" viewBox="0 0 820 84" role="navigation" aria-label="Site route map">
            <path d="M320 36 C 340 36, 340 66, 372 66 L 700 66" fill="none" stroke="#d9489b" strokeWidth="6" strokeLinecap="round" />
            <line x1="20" y1="36" x2="620" y2="36" stroke="#eab543" strokeWidth="6" strokeLinecap="round" />

            {STATIONS.map((s) => {
              const active = location.pathname === s.to;
              return (
                <g
                  key={s.to}
                  data-testid={s.testid}
                  onClick={() => navigate(s.to)}
                  onKeyDown={(e) => e.key === "Enter" && navigate(s.to)}
                  role="link"
                  tabIndex={0}
                  className="cursor-pointer outline-none"
                >
                  <title>{s.label}</title>
                  <rect x={s.x - 45} y={0} width={90} height={84} fill="transparent" />
                  {active && <circle cx={s.x} cy="36" r="15" fill="none" stroke="#eab543" strokeOpacity="0.45" strokeWidth="2" />}
                  <circle
                    cx={s.x}
                    cy="36"
                    r="9"
                    fill={active ? "#eab543" : "#1c0a10"}
                    stroke={s.x === 320 ? "#d9489b" : "#eab543"}
                    strokeWidth={s.x === 320 ? 4 : 3}
                  />
                  {s.x === 320 && <circle cx="320" cy="36" r="4" fill="#1c0a10" stroke="#eab543" strokeWidth="2" />}
                  <text
                    x={s.x}
                    y="14"
                    textAnchor="middle"
                    fontFamily="'Geist Mono Variable', monospace"
                    fontSize="11"
                    fontWeight={active ? 700 : 400}
                    letterSpacing="1.5"
                    fill={active ? "#eab543" : "#fbf1dc"}
                  >
                    {s.label}
                  </text>
                </g>
              );
            })}

            <g
              data-testid="alter-ego-menu-trigger"
              onClick={() => setDropOpen(true)}
              onMouseEnter={() => setDropOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setDropOpen((v) => !v)}
              role="button"
              tabIndex={0}
              aria-expanded={dropOpen}
              className="cursor-pointer outline-none"
            >
              <title>Alter Ego</title>
              <rect x={655} y={40} width={165} height={44} fill="transparent" />
              {alterActive && <circle cx="700" cy="66" r="14" fill="none" stroke="#d9489b" strokeOpacity="0.5" strokeWidth="2" />}
              <circle cx="700" cy="66" r="9" fill={alterActive ? "#d9489b" : "#1c0a10"} stroke="#d9489b" strokeWidth="3" />
              <text
                x="740"
                y="70"
                fontFamily="'Geist Mono Variable', monospace"
                fontSize="11"
                fontWeight={alterActive ? 700 : 400}
                letterSpacing="1.5"
                fill="#d9489b"
              >
                ALTER EGO
              </text>
            </g>

            <motion.g
              initial={false}
              animate={{ x: activeX, y: activeY }}
              transition={{ type: "spring", stiffness: 55, damping: 13 }}
              data-testid="nav-auto"
            >
              <rect x="-29" y="-8" width="58" height="16" rx="6" fill="#fbf1dc" />
              <rect x="-21" y="-4" width="9" height="7" rx="1" fill="#1c0a10" />
              <rect x="-7" y="-4" width="9" height="7" rx="1" fill="#1c0a10" />
              <rect x="7" y="-4" width="9" height="7" rx="1" fill="#1c0a10" />
              <circle cx="-16" cy="9" r="4" fill="#1c0a10" stroke="#fbf1dc" strokeWidth="1.5" />
              <circle cx="16" cy="9" r="4" fill="#1c0a10" stroke="#fbf1dc" strokeWidth="1.5" />
            </motion.g>
          </svg>

          <AnimatePresence>
            {dropOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="jali-bg absolute right-0 top-full z-50 mt-1 w-72 border border-linepink/60 bg-[#240A0F] p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)]"
                data-testid="alter-ego-dropdown"
              >
                <p className="flex items-center gap-2 px-4 pt-2 pb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-linepink">
                  <ChevronDown className="h-3 w-3" /> Change line for…
                </p>
                {ALTER_EGO.map((item) => (
                  <Link
                    key={item.id}
                    to={`/alter-ego/${item.id}`}
                    data-testid={`alter-ego-dropdown-${item.id}`}
                    onClick={() => setDropOpen(false)}
                    className="group block border border-transparent px-4 py-3 transition-colors duration-200 hover:border-linegold/50 hover:bg-[#46141D]"
                  >
                    <span className="block font-display text-base font-bold text-linecream group-hover:text-linegold">
                      {item.label}
                    </span>
                    <span className="block text-xs text-sand/80">{item.desc}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          type="button"
          data-testid="mobile-menu-button"
          className="p-2 text-linecream lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="jali-bg overflow-hidden border-t border-linegold/30 bg-[#1D060A] lg:hidden"
            data-testid="mobile-menu"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {STATIONS.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  data-testid={`${s.testid}-mobile`}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 font-display text-2xl font-bold ${
                    location.pathname === s.to ? "text-linegold" : "text-linecream"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-linepink">Alter Ego Line</p>
              {ALTER_EGO.map((item) => (
                <Link
                  key={item.id}
                  to={`/alter-ego/${item.id}`}
                  data-testid={`alter-ego-mobile-${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`py-1.5 pl-4 font-display text-xl font-bold ${
                    location.pathname === `/alter-ego/${item.id}` ? "text-linegold" : "text-sand"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { Jhumka } from "./Ornaments";

const ALTER_EGO = [
  { id: "art", label: "Art & Painting", desc: "Handmade & physical explorations" },
  { id: "photography", label: "Photography", desc: "Delhi streets & candid frames" },
  { id: "illustrations", label: "Illustrations", desc: "Folklore, digital & AI hybrids" },
];

const LINKS = [
  { to: "/", label: "Home", testid: "nav-tab-home" },
  { to: "/resume", label: "Resume", testid: "nav-tab-resume" },
  { to: "/research", label: "Research", testid: "nav-tab-research" },
];

export default function Navbar() {
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const alterActive = location.pathname.startsWith("/alter-ego");

  const navCls = (active: boolean) =>
    `relative px-1 py-2 font-editorial text-[13px] uppercase tracking-[0.2em] transition-colors duration-300 ${
      active ? "text-goldleaf" : "text-sand hover:text-cream"
    }`;

  return (
    <header
      data-testid="site-navbar"
      className="fixed inset-x-0 top-0 z-50 border-b border-marigold/30 bg-lacquer/85 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" data-testid="nav-logo" className="group flex items-center gap-2.5">
          <Jhumka className="h-8 w-6 transition-transform duration-500 group-hover:rotate-12" id="nav-jg" />
          <span className="font-display text-lg font-black tracking-tight text-cream">
            Sangya <span className="text-goldleaf">Tyagi</span>
          </span>
          <span className="hidden font-editorial text-xs tracking-[0.2em] text-rani sm:inline">संज्ञा</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} data-testid={l.testid} className={({ isActive }) => navCls(isActive)}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-marigold via-goldleaf to-rani"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              type="button"
              data-testid="alter-ego-menu-trigger"
              onClick={() => setDropOpen((v) => !v)}
              className={`${navCls(alterActive)} flex items-center gap-1.5`}
              aria-expanded={dropOpen}
            >
              <Sparkles className="h-3.5 w-3.5 text-rani" />
              Alter Ego
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`} />
              {alterActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-marigold via-goldleaf to-rani"
                />
              )}
            </button>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="jali-bg absolute right-0 top-full w-72 border border-marigold/50 bg-[#240A0F] p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)]"
                  data-testid="alter-ego-dropdown"
                >
                  {ALTER_EGO.map((item) => (
                    <Link
                      key={item.id}
                      to={`/alter-ego/${item.id}`}
                      data-testid={`alter-ego-dropdown-${item.id}`}
                      onClick={() => setDropOpen(false)}
                      className="group block border border-transparent px-4 py-3 transition-colors duration-200 hover:border-marigold/40 hover:bg-[#46141D]"
                    >
                      <span className="block font-display text-base font-bold text-cream group-hover:text-goldleaf">
                        {item.label}
                      </span>
                      <span className="block text-xs text-sand/80">{item.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" data-testid="nav-tab-contact" className={({ isActive }) => navCls(isActive)}>
            {({ isActive }) => (
              <>
                Contact Me
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-marigold via-goldleaf to-rani"
                  />
                )}
              </>
            )}
          </NavLink>
        </nav>

        <button
          type="button"
          data-testid="mobile-menu-button"
          className="p-2 text-cream md:hidden"
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
            className="jali-bg overflow-hidden border-t border-marigold/30 bg-[#1D060A] md:hidden"
            data-testid="mobile-menu"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {[...LINKS, { to: "/contact", label: "Contact Me", testid: "nav-tab-contact-mobile" }].map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`${l.testid}-mobile`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-2 font-display text-2xl font-bold ${isActive ? "text-goldleaf" : "text-cream"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <p className="mt-3 font-editorial text-xs uppercase tracking-[0.25em] text-rani">Alter Ego</p>
              {ALTER_EGO.map((item) => (
                <NavLink
                  key={item.id}
                  to={`/alter-ego/${item.id}`}
                  data-testid={`alter-ego-mobile-${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-1.5 pl-4 font-display text-xl font-bold ${isActive ? "text-goldleaf" : "text-sand"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

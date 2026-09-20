# PRD — Sangya Tyagi · Indian Maximalism Personal Website

## Original Problem Statement
Personal website, theme: **Indian Maximalism**. Tabs: Home, Resume, Research, Alter Ego (dropdown → Art, Photography, Illustrations), Contact Me. Interactive and smooth. Home = landing page inspired by Indian autos, jhumkas, bird's-eye Indian market streets (Delhi Haat). Indian maximalist typography. Reference moodboard: retro Indian poster art, jewel tones, witty Hindi slogans, ornamental frames.

## Owner / Persona
Sangya Tyagi (She/Her) — PhD candidate, University of Westminster (Generative AI & Media, public policy); AFHEA; Guest Lecturer; Administrative Assistant @ CETI; 6+ yrs in higher ed. Based in London, roots in Delhi.

## Architecture
- FastAPI + motor (MongoDB) backend, routes under `/api` via `api_router`.
- Vite + React 19 + TS frontend; TanStack Query; shadcn/ui (base-ui); `motion` (framer-motion) + `lenis` smooth scrolling; fonts via @fontsource-variable (Playfair Display / Lora / Plus Jakarta Sans / Geist Mono).
- Design system: `/app/design_guidelines.json` — lacquer red/maroon base, marigold/gold, rani pink, rickshaw green, peacock teal.

## Core Requirements (static)
- 5 tabs; Alter Ego unfolds dropdown (art / photography / illustrations)
- Smooth, interactive, award-level motion (masked hero reveal, scroll reveals, parallax, marquee)
- Home inspired by autos, jhumkas, Delhi-Haat bird's-eye market
- Contact: working form (saved to DB) + displayed social links
- Galleries: placeholder frames to be replaced with Sangya's own work

## Implemented (2026-09-20 — Alter Ego station)
- New `/alter-ego` hub page (AlterEgo.tsx) matching Sangya's AlterEgo.dc.html mock: "Magenta Line / Outside Work Hours" badge, ALTER pink / EGO cream-outline, "AAJ KA MENU" diner board (Photography→Frames, Illustration→Drawings, Sketchbook→Unfinished, Kathak→The First Art — all clickable), scattered collage (tilted Delhi polaroid, pink arch-line illustration card, gold striped art card — all hover-straighten and link to galleries), her transparent chai-hand PNG (tilts on hover), dotted string-lights arc, pink squiggles, "Back to Work Line" button, tilted pink station marquee (new Marquee variant "pink").
- Two new gallery types added to AlterEgoGallery: Sketchbook and Kathak (5 galleries total; nav dropdown lists all 5).
- Clicking the ALTER EGO nav station now opens the hub (hover still unfolds the dropdown); Home CTAs point to the hub.
- Images self-hosted in `frontend/public/assets/` (delhi-market.jpg, chai-hand.png) — relative paths so GitHub Pages project-site URLs work.
- Verified: typecheck clean; browser pass — hub renders per mock, menu → Kathak gallery, polaroid → Photography gallery, collage/marquee/footer all present.

## Implemented (2026-09-20 — transit redesign)
- Transit-map navbar (TransitNav.tsx): gold "work line" with station stops HOME / RESUME / RESEARCH / TEACHING / CONTACT, pink branch line to ALTER EGO (opens gallery dropdown), and a tiny auto-rickshaw glyph that spring-animates along the line to the active station. Mobile keeps a hamburger menu.
- Home hero rebuilt to Sangya's design mock (Main.dc.html): jali backdrop, pink side squiggle, SANGYA solid / TYAGI gold-outline / संग्या त्यागी pink, new bio copy, "AFHEA / GUEST LECTURER" mono line, gold "Explore Research" + pink "Change to Alter Ego Line" CTAs, "Next station: Resume…" caption.
- AutoShowcase.tsx: double-arched frame with a fully interactive SVG auto — REPAINT cycles FIROZI/GULABI/SARSON colorways, clicking the auto honks (WebAudio two-tone beep + PEEP PEEP bubble + expanding rings + hop + honk counter + caption changes), mouse-move parallax on arch/auto layers, hover bob + faster wheels + drifting dot texture.
- Tilted gold marquee strip with truck slogans (Marquee variant="gold").
- New /teaching page: modules & cohorts, syllabus topics, AFHEA credential, teaching philosophy, guest-lecture CTA.
- All pages' top padding bumped to pt-24 for the taller nav; AutoBadge restyled to mock (gold body, 5px green top strip).
- Verified: typecheck clean; browser pass — honk counter/caption, repaint, station navigation, dropdown → gallery, gold marquee.

## Implemented (2026-09-19)
- Home: kinetic masked line-by-line hero (SANGYA / TYAGI outline / संग्या त्यागी), swinging SVG jhumka, arch-clipped Delhi market photo with scroll parallax, animated Delhi-Haat stall-map backdrop, truck-art badges, numbered manifesto chapters (01 Researcher / 02 Teacher / 03 Alter Ego), "Haat of My Work" stall grid, auto-meter stats, editorial Hindi-English marquee ribbons.
- Resume: real content — experience timeline (Westminster, Political Sampark, Matrix, UT Arlington), education, certifications (AFHEA etc.), skills cloud, 2021 UTA publication.
- Research: PhD overview (CAMRI), 3 research-area stalls, conferences (Paris 2025 poster, Málaga 2024 talk), publication, methods toolkit.
- Alter Ego: `/alter-ego/:type` galleries (art/photography/illustrations), 6 ornamental placeholder frames each, lightbox modal, gallery switcher, curator note.
- Contact: enquiry form now posts DIRECTLY to Formspree (`VITE_FORMSPREE_ENDPOINT` in `frontend/.env`, placeholder `your_form_id` — Sangya swaps in her own form ID; JSON POST with `Accept: application/json`, `_gotcha` honeypot, graceful "not configured" toast until set), subject pills, sonner toasts, social links, live London/New Delhi clocks. (FastAPI `/api/enquiries` endpoints remain in the backend but the form no longer uses them — the site is now fully static-host ready, e.g. GitHub Pages.)
- Backend: `POST /api/enquiries` (201), `GET /api/enquiries`; indexes on `id` + `created_at`.
- Verified: typecheck clean, backend import OK, curl POST/GET/422 via public URL, browser pass (all tabs, dropdown, lightbox, form submit with toast).

## Notes / Placeholders
- Social links are REAL: LinkedIn (in/sangyatyagi), Instagram (@serious_sangya), MA thesis on MavMatrix, University of Westminster. Email/X rows were dropped — re-add in `Contact.tsx` SOCIALS if wanted.
- Contact form posts to Formspree via `VITE_FORMSPREE_ENDPOINT` (frontend/.env locally; repo variable in GitHub Actions).
- GitHub Pages ready (2026-09-19): `base: "./"` in vite.config.ts, `HashRouter` in main.tsx, `.github/workflows/deploy-pages.yml` (push to main → build frontend/dist → deploy Pages). Repo needs: Pages source = GitHub Actions, and a `VITE_FORMSPREE_ENDPOINT` Actions variable.
- Gallery frames are CSS-pattern placeholders awaiting her artwork.

## Backlog (prioritized)
- P0: Swap real social links + email; upload real artwork into gallery frames (needs object storage integration).
- P1: Downloadable PDF resume button; admin view to read enquiries (or email notification via Resend).
- P1: Blog/"Field Notes" section for research updates.
- P2: Custom cursor, page-transition wipes (rickshaw drive-by), sound toggle (ambient bazaar), Hindi/English language toggle.

## Next Tasks
1. Collect Sangya's real social URLs and wire them in.
2. Integrate object storage so she can upload artwork per frame.
3. Add Resend email notification on new enquiry.

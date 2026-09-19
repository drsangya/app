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

## Implemented (2026-09-19)
- Home: kinetic masked line-by-line hero (SANGYA / TYAGI outline / संग्या त्यागी), swinging SVG jhumka, arch-clipped Delhi market photo with scroll parallax, animated Delhi-Haat stall-map backdrop, truck-art badges, numbered manifesto chapters (01 Researcher / 02 Teacher / 03 Alter Ego), "Haat of My Work" stall grid, auto-meter stats, editorial Hindi-English marquee ribbons.
- Resume: real content — experience timeline (Westminster, Political Sampark, Matrix, UT Arlington), education, certifications (AFHEA etc.), skills cloud, 2021 UTA publication.
- Research: PhD overview (CAMRI), 3 research-area stalls, conferences (Paris 2025 poster, Málaga 2024 talk), publication, methods toolkit.
- Alter Ego: `/alter-ego/:type` galleries (art/photography/illustrations), 6 ornamental placeholder frames each, lightbox modal, gallery switcher, curator note.
- Contact: working enquiry form (POST `/api/enquiries` → MongoDB `enquiries`, validated by Pydantic + EmailStr), subject pills, sonner toasts, social links, live London/New Delhi clocks.
- Backend: `POST /api/enquiries` (201), `GET /api/enquiries`; indexes on `id` + `created_at`.
- Verified: typecheck clean, backend import OK, curl POST/GET/422 via public URL, browser pass (all tabs, dropdown, lightbox, form submit with toast).

## Notes / Placeholders
- Social URLs (LinkedIn, Scholar, Instagram, X, email) are plausible placeholders — Sangya should confirm/replace in `frontend/src/pages/Contact.tsx` (SOCIALS array).
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

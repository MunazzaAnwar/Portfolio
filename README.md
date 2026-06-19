# Portfolio — React + Tailwind + Three.js + GSAP + Framer Motion

A premium, single-page developer portfolio built for a Software Engineer / Frontend Developer / Python Developer / AI enthusiast / Freelancer.

## Stack
- **React 18** + **Vite** — fast dev/build tooling
- **Tailwind CSS** — utility-first styling with a custom dark "void" design system
- **Three.js** — interactive animated "neural network" particle field in the hero
- **GSAP + ScrollTrigger** — the experience timeline's animated connector line
- **Framer Motion** — page-load sequence, scroll reveals, modal transitions, tab switching, project card layout animation

## Structure
```
src/
  components/      Reusable UI components (Navbar, Hero, About, Skills, etc.)
  three/            Three.js scene component (NeuralField)
  data/             Single source of truth for all content (content.js)
  App.jsx           Composes sections, preloader, scroll progress bar
  index.css         Tailwind layers + custom cursor/scrollbar/selection styles
```

## Getting started
```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Customize
- Edit **src/data/content.js** to change all copy: name, roles, timeline, skills, experience, projects, certifications, services.
- Edit **tailwind.config.js** to change the color palette / fonts (currently Space Grotesk + Inter + JetBrains Mono).
- Wire the contact form in **src/components/Contact.jsx** to a real backend (Formspree, Resend, a serverless function, etc.) — it currently simulates a submission.
- Replace the OpenStreetMap embed URL in **Contact.jsx** with your own city's bounding box, or swap for Google Maps if you have an API key.

## Notes on accessibility & performance
- Respects `prefers-reduced-motion`.
- Custom cursor is disabled on touch/mobile widths.
- Three.js particle count automatically drops on small screens.
- All interactive elements are real `<button>`/`<a>` tags with visible focus states inherited from the browser; add custom `:focus-visible` styles if you want a more on-brand focus ring.

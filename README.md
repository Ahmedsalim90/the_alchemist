# THE ALCHEMIST

**I turn real-world problems into software.**

The personal developer portfolio of **Nsangou Ahmed Salim** Full-Stack & Mobile Developer, Software Engineering student, and builder based in Cameroon.

> Designer · Developer · Problem Solver
> Think / Build / Transform

---

## About this project

THE ALCHEMIST is a fully custom-built, bilingual (English/French), dark/light-mode portfolio showcasing real projects, a personal engineering process, and direct ways to get in touch. It was built incrementally, milestone by milestone, with a strong focus on:

- Honest, accurate content no invented metrics, no exaggerated claims
- A restrained, technical, premium visual identity (not a generic template)
- Real project case studies with accurate technology stacks and contribution details
- Full accessibility and reduced-motion support throughout

## Tech stack

- **React** (JavaScript)
- **Vite** build tool and dev server
- **Tailwind CSS v4** via `@tailwindcss/vite`, using a token-based `@theme` design system
- **React Router** client-side routing (home page + dynamic case-study routes)
- **lucide-react** & **simple-icons** icon rendering for the Toolbox and technology tags
- Native **IntersectionObserver** custom scroll-reveal system, no animation library

No backend, no database, and no authentication all contact actions (email, WhatsApp, phone, LinkedIn, GitHub) are direct links.

## Features

- **Hero** with a chained typewriter sequence (role → headline) and a corner-reveal portrait animation
- **Selected Work** featured and secondary project cards, data-driven, linking to full case studies
- **Project Case Studies** dedicated `/work/:slug` pages covering overview, problem, approach, build, contribution, challenges, lessons, and current state
- **The Alchemist Method** a five-stage process section (Think → Design → Build → Test → Transform)
- **Design + Engineering**, **Toolbox**, **About**, **The Lab**, **Collaboration**, **GitHub / Code**, and **Contact** sections
- **Dark / Light theme** a single global theme state, persisted in `localStorage`, shared across Navbar and Footer
- **English / French language system** fully data-driven translations, persisted independently of theme
- **Subtle particle / circuit-trace background** and a reusable `Reveal` scroll-animation component, both respecting `prefers-reduced-motion`
- Fully responsive, mobile-first layout with a dedicated mobile navigation drawer

## Project structure

```
src/
  assets/            Images (hero, about, brand logos, project screenshots)
  components/        Reusable UI, layout, and per-section components
  context/            Theme and Language global state (React Context)
  data/               Content as data projects, translations, toolbox, contact info, etc.
  hooks/              Custom hooks (typewriter, scroll reveal, delayed reveal, page title)
  pages/              Route-level pages (case study page)
  sections/           Top-level homepage sections, assembled in App.jsx
  App.jsx             Route definitions and homepage composition
  main.jsx            App entry point, wraps App in providers and BrowserRouter
  index.css           Design tokens, global styles, and custom utilities
```

Content (project details, translations, toolbox categories, contact info) lives in `src/data/` most updates to text or project information don't require touching any component code.

## Getting started

**Prerequisites:** Node.js and npm installed.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Content updates

- **Projects** edit `src/data/projects.js`
- **Contact details** edit `src/data/contact.js`
- **Toolbox / technologies** edit `src/data/toolbox.js`
- **Translations (EN/FR)** edit `src/data/translations.js`
- **GitHub contribution snapshot** edit `src/data/repositories.js`

## Deployment

Not yet deployed. The project is a static Vite build (`npm run build` outputs a `dist/` folder) and is suitable for any static host (e.g. Vercel, Netlify, Render, GitHub Pages).

## Contact

- **Email:** thealchemist237@gmail.com
- **WhatsApp:** [+237 657 576 445](https://wa.me/237657576445)
- **LinkedIn:** [Nsangou Ahmed Salim](https://www.linkedin.com/in/nsangou-ahmed-0126b2390)
- **GitHub:** [@Ahmedsalim90](https://github.com/Ahmedsalim90)

---

© 2026 Nsangou Ahmed Salim. All rights reserved.
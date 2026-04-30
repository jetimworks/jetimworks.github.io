# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jetimworks is a React + Vite personal website for a technology studio. It showcases products and services using scroll-driven sections with framer-motion animations.

## Common Commands

```bash
npm run dev      # Start development server
npm run build   # Build for production (outputs to dist/)
npm run preview # Preview production build locally
```

## Tech Stack

- **React 18** with Vite 5
- **framer-motion** for animations
- **GitHub Pages** deployment via GitHub Actions
- Google Fonts: Bruno Ace SC (headings) + JetBrains Mono (body)

## Architecture

Single-page application with a scroll-based layout:
- `HeroSection` — landing with CTA scrolling to solutions
- `SolutionsSection` — forwarded ref for scroll target
- `PhilosophySection` — about/mission section
- `ContactSection` — contact form
- `Footer`

App entry point is `src/main.jsx` → `src/App.jsx` → components.

Build output goes to `dist/` and deploys to GitHub Pages on every push to `main`. The workflow creates a `.nojekyll` file to bypass Jekyll processing.

## Key Files

- `vite.config.js` — base path is `/`
- `index.html` — SPA entry with Google Fonts preconnect
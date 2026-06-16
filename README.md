# Portfolio — Akshaya Rachabattula

A modern, responsive portfolio website built with **Angular 20** featuring dark/light theme support, 3D visual effects, and fluid responsive design.

## Tech Stack

- **Framework:** Angular 20 (Standalone Components, Signals)
- **Language:** TypeScript 5.9 (strict mode)
- **Styling:** CSS3 with Custom Properties (CSS Variables)
- **Build Tool:** Angular CLI with Vite
- **Architecture:** Component-based, single-page application

## Project Structure

```
src/
├── app/
│   ├── components/         # Feature components (one per section)
│   │   ├── header/         # Navigation with theme toggle
│   │   ├── hero/           # Landing section with 3D avatar
│   │   ├── about/          # About me section
│   │   ├── experience/     # Work experience timeline
│   │   ├── skills/         # Technical skills grid
│   │   ├── projects/       # Projects & internships
│   │   ├── education/      # Education details
│   │   ├── contact/        # Contact information
│   │   └── footer/         # Site footer
│   ├── data/               # Static data (resume content)
│   ├── models/             # TypeScript interfaces
│   ├── services/           # Injectable services (theme management)
│   ├── app.ts              # Root component
│   ├── app.config.ts       # App configuration & providers
│   └── app.routes.ts       # Route definitions
├── environments/           # Environment-specific configs
├── styles.css              # Global styles & CSS variables
└── index.html              # Entry HTML
```

## Key Features

- **Dark/Light Mode** — Toggle with system preference detection and localStorage persistence
- **Responsive Design** — Fluid typography and layouts adapting from 320px to 2560px+
- **3D Visual Effects** — CSS perspective transforms, animated avatar, floating badges
- **Performance** — Standalone components, minimal bundle (~83kB transferred)
- **Type Safety** — Strict TypeScript with strongly-typed data models
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start
# → Open http://localhost:4200

# Build for production
npm run build
# → Output in dist/my-angular-app
```

## Development

```bash
# Run unit tests
npm test

# Lint (if configured)
npm run lint

# Watch mode for development
npm run watch
```

## Design Decisions

1. **Standalone Components** — No NgModules; each component is self-contained for better tree-shaking and lazy-loading potential.
2. **CSS Custom Properties** — Theme switching via CSS variables avoids JavaScript-driven style recalculation.
3. **Signals** — Used for reactive theme state instead of RxJS for lightweight reactivity.
4. **Data Separation** — Resume content lives in a dedicated data file, making it easy to swap for a CMS or API later.
5. **Fluid Design** — `clamp()` functions ensure proportional scaling without rigid breakpoints.

## License

Private — All rights reserved.

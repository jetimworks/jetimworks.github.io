# Tech Context - Technologies & Setup

## Core Stack
- **Runtime**: Node.js
- **Build Tool**: Vite 5.0.0
- **Framework**: React 18.2.0
- **Animation**: Framer Motion 10.16.4
- **Styling**: Plain CSS (no preprocessors)

## Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4"
}
```

```json
{
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "vite": "^5.0.0"
}
```

## Project Structure
```
jetimworks/
├── index.html          # Entry HTML with Google Fonts
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── components/
│       ├── HeroSection.jsx    # Terminal interface
│       ├── ShowRoom.jsx       # Project showcase
│       ├── ContactUs.jsx      # Contact info
│       ├── FunFact.jsx        # Random facts
│       └── Products.jsx       # Coming soon
```

## External Resources
- **Fonts**: Google Fonts (Press Start 2P, Bruno Ace SC, Space Mono)
- **Images**: Unsplash CDN for ShowRoom placeholder image
- **Booking**: Calendly integration for meeting scheduling

## Scripts
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Development Commands
- Development server runs on localhost (default port 5173)
- Hot module replacement enabled
- No SSR or backend required

## Browser Support
- Modern browsers with ES6+ support
- CSS custom properties support required
- CSS 3D transforms for page flip effect

## Code Patterns
- Functional components with hooks
- CSS modules not used (single index.css)
- No TypeScript (plain JavaScript)
- No testing framework (manual testing only)
- No state management library (React useState sufficient)

## Environment
- No .env files needed
- No API integrations currently
- Static site (could be deployed anywhere)
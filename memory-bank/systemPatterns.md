# System Patterns - Architecture & Design

## Component Architecture

```
App.jsx (Root)
├── State: currentPage, isFlipped
├── Manages: Page navigation with 3D flip animation
│
├── HeroSection.jsx
│   ├── BinaryRain - Background effect
│   ├── Terminal UI - Main interface
│   │   ├── TypingText - Animated header
│   │   ├── CommandList - Available commands
│   │   └── CommandInput - Autocomplete input
│   └── Props: onNavigate
│
├── ShowRoom.jsx
│   ├── Image display
│   ├── Project description
│   └── Props: onBack
│
├── ContactUs.jsx
│   ├── Email link
│   ├── Calendly booking link
│   └── Props: onBack
│
├── FunFact.jsx
│   ├── Random fact display
│   ├── Refresh button (SVG icon)
│   └── Props: onBack
│
└── Products.jsx
    ├── "Coming Soon" placeholder
    └── Props: onBack
```

## Page Navigation Pattern
- Uses React state (not router) for simple page switching
- 3D flip animation triggers on navigation
- 1.2s transition with ease [0.4, 0, 0.2, 1]
- Page rotates 90° then switches content, then rotates back

## Animation Patterns

### Page Flip (Framer Motion)
```jsx
<motion.div
  animate={{ 
    rotateY: isFlipped ? 90 : 0,
    scale: isFlipped ? 0.95 : 1
  }}
  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
/>
```

### Binary Rain
- 6 columns with random binary strings
- Animation: translateY from -100% to 250vh
- Duration: 12-20s per column
- Opacity: 0.12 (subtle)

### Typing Effect
- Character-by-character reveal
- 80ms per character
- Blinking cursor during/after typing

## CSS Architecture
- Single index.css with CSS custom properties
- No CSS modules or preprocessors
- Mobile-first responsive approach
- Extensive use of clamp() for fluid typography

## Styling Patterns
```css
/* Color Variables */
:root {
  --white: #0a0f0a;        /* Actually black */
  --green: #00ff41;        /* Matrix green */
  --green-dark: #00cc33;   /* Darker green */
}

/* Typography */
--font-header: 'Bruno Ace SC', 'Press Start 2P', cursive;
--font-terminal: 'Press Start 2P', cursive;
--font-body: 'Space Mono', monospace;
```

## Responsive Breakpoints
- Primary breakpoint: 768px
- All sizing uses clamp() for fluid scaling
- No fixed pixel values for major elements

## Command System
- Defined as array of objects: `{ cmd, page, label }`
- Input automatically prepends "/" if missing
- Autocomplete matches partial input
- ArrowRight/Space/Enter accepts suggestion
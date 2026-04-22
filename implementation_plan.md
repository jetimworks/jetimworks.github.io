# Implementation Plan

[Overview]
Enhance the ShowRoom component to display featured projects and research work with navigation controls. Transform the static placeholder into an interactive carousel showcasing Joshua's portfolio with project images, titles, summaries, and skill highlights using the terminal-inspired aesthetic.

[Types]
```typescript
interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  skills: string[];
  category: 'project' | 'research';
}

interface ShowRoomState {
  currentIndex: number;
  projects: Project[];
}
```

[Files]
- **Modified:** `src/components/ShowRoom.jsx` - Transform to carousel with navigation state, project data array, and navigation UI
- **Modified:** `src/index.css` - Add carousel navigation button styles, skill tags styling, and responsive adjustments

[Functions]
- **Modified:** `ShowRoom` component (src/components/ShowRoom.jsx)
  - Add useState for currentIndex (starts at 0)
  - Add projects array with data from reference website
  - Add handleNext/handlePrev navigation handlers
  - Add conditional rendering for disabled navigation states
  - Add skill tags display below summary

[Classes]
- New CSS classes for carousel functionality:
  - `.showroom-nav-container` - Container for navigation buttons and counter
  - `.showroom-nav-button` - Forward/backward button styles
  - `.showroom-nav-button:disabled` - Disabled button state
  - `.skill-tag` - Individual skill highlight pill style
  - `.skills-container` - Container for skill tags row

[Dependencies]
No new dependencies required. Using existing React hooks (useState) and framer-motion patterns.

[Testing]
- Test navigation forward/backward through all projects
- Verify navigation wraps around (last → first)
- Confirm disabled state at boundaries (optional, may allow wrapping)
- Verify skill tags display correctly
- Test on mobile viewports
- Verify 3D flip animation still works with new component

[Implementation Order]
1. Update ShowRoom.jsx with state management and project data array
2. Update ShowRoom.jsx with navigation handlers and conditional rendering
3. Update ShowRoom.jsx with skill tags display
4. Add carousel navigation CSS styles to index.css
5. Add skill tag CSS styles to index.css
6. Add responsive adjustments for mobile
7. Test the complete flow

---

## Project Data Structure

### Featured Projects (from joshuaetim.github.io)
1. **McLabor** - IT operations automation for workforce staffing
   - Skills: Golang, Python, Automation
   - Image: images/projects/mclabor.png

2. **Lena** - Educational software reshaping learning & teaching in Nigeria
   - Skills: Python, Postgres, Golang
   - Image: images/thumbnails/lena.avif

3. **Circula** - Inventory management enabling a cleaner world through recycling
   - Skills: Golang, Python, Postgres
   - Image: images/thumbnails/circula.png

4. **Reccur Payment** - Payment & payroll management system
   - Skills: Postgres, Python, JS
   - Image: images/thumbnails/reccur.png

5. **AirGateway** - Flight booking management with integrated APIs
   - Skills: Golang, APIs, Python
   - Image: images/thumbnails/airgateway.png

6. **Booking Ninjas** - Property management with Salesforce & AI/ML
   - Skills: Golang, AI/ML, Salesforce
   - Image: images/thumbnails/bookingninjas.png

### Research Projects (from joshuaetim.github.io)
7. **Multi-Pipeline Sentiment Analysis for West-African Pigin**
   - Skills: Python, NLP, Machine Learning, XLM-R
   - Image: images/projects/research.png

8. **Golang Runtime and Error Management**
   - Skills: Golang, Error Handling, Debugging, Runtime Analysis
   - Image: images/projects/runtime

---

## Image Assets Path Reference

The project images are located in the reference website directory. For the jetimworks project, we will use placeholder images from Unsplash that match the tech theme, with the option to later copy the actual images.

**Reference paths:**
- `/Users/joshuaetim/Documents/personal_website/joshuaetim.github.io/images/projects/`
- `/Users/joshuaetim/Documents/personal_website/joshuaetim.github.io/images/thumbnails/`

**Local paths (to be copied later if needed):**
- `public/images/projects/` (to be created)
- `public/images/thumbnails/` (to be created)

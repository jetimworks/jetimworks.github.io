# Active Context - Current Work Focus

## Latest Activity
- **Last Commit**: 95c70e66e6c3e94d545c5b38bfd746e456dce47b
- **Project Status**: Active development

## Recent Changes (Last Session)
- Initial project setup with Vite + React
- Created terminal-inspired UI with command navigation
- Implemented 3D page flip animations with Framer Motion
- Added binary rain background effect
- Built all 4 main pages: Hero, ShowRoom, ContactUs, FunFact

## Current Work Focus
Memory Bank documentation is now complete. All 6 core files are in place.

## Next Steps / Todo
- [ ] Test site on mobile devices
- [ ] Add more content to ShowRoom page (currently just one project)
- [ ] Develop actual products content in Products page
- [ ] Consider adding more fun facts
- [ ] Add real project images/content
- [ ] Consider adding testimonials or client logos

## Important Patterns & Preferences
1. **Animation Style**: Prefer smooth, elegant transitions (1.2s duration for page flips)
2. **Color Scheme**: Strict green-on-black only (no deviations)
3. **Fonts**: Three specific fonts - Bruno Ace SC, Press Start 2P, Space Mono
4. **Command Names**: Use Unix-style paths like `/show-room`, `/contact-us`

## Learnings & Insights
- Framer Motion works well for 3D transforms but requires careful z-index management
- Mobile input handling needs special consideration (no auto-focus)
- Binary rain should be subtle (opacity 0.12) to not distract from content
- Responsive typography using clamp() works well across all breakpoints

## Active Decisions
- Using state-based page routing (not React Router) - simpler for this use case
- Commands auto-prepend "/" if user doesn't type it
- Arrow right completes autocomplete suggestions
- Enter key submits command
- Space key also accepts autocomplete
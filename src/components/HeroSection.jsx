function HeroSection({ onExplore }) {
  return (
    <section className="hero">
      <img
        src="/logo_white_transparent.png"
        alt="Jetimworks"
        className="hero-logo"
      />

      <div className="hero-content">
        <p className="hero-eyebrow">Jetimworks Technology Studio</p>

        <h1 className="hero-title">
          Pushing the Frontiers of
          <span className="hero-title-accent">Backend Technology</span>
        </h1>

        <p className="hero-subtitle">
          We build interesting solutions to society's problems.
          Risk takers who face challenges wherever we can.
        </p>

        <button className="hero-cta" onClick={onExplore}>
          Explore Our Work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default HeroSection
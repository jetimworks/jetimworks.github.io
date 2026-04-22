function Products({ onBack }) {
  return (
    <div className="page products-page">
      <div className="products-content">
        <h1>Email User Backend</h1>
        <p className="products-tagline">
          Send beautiful emails from your application in minutes, not months.
        </p>
        <p className="products-description">
          A developer-friendly API that handles email sending, AI-powered generation, and secure API key management so you can focus on building your product. Integrate once, send forever.
        </p>
        <div className="products-features">
          <div className="products-feature">
            <h3>⚡ Lightning Fast Integration</h3>
            <p>RESTful API with clear documentation. Get up and running in under 5 minutes with SDKs and code examples for every major language.</p>
          </div>
          <div className="products-feature">
            <h3>🤖 AI-Powered Content</h3>
            <p>Generate stunning email content with AI. Provide a prompt, and let Claude craft professional emails that convert.</p>
          </div>
          <div className="products-feature">
            <h3>🔒 Enterprise-Grade Security</h3>
            <p>AES-256-GCM encryption for API keys, JWT authentication, and audit logging for every request. Your data, protected.</p>
          </div>
        </div>
        <div className="products-cta">
          <a 
            href="https://jetimworks-blog.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="products-button"
          >
            Get Started Free →
          </a>
        </div>
        <div className="products-tech">
          <span>Built with</span>
          <span className="products-tech-tag">Go</span>
          <span className="products-tech-tag">PostgreSQL</span>
          <span className="products-tech-tag">Redis</span>
          <span className="products-tech-tag">Resend API</span>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default Products
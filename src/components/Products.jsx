function Products({ onBack }) {
  return (
    <div className="page products-page">
      <div className="products-box">
        <h1>Email User Backend</h1>
        <p className="products-feature">Send emails from your app via API</p>
        <p className="products-feature">AI-powered email content generation</p>
        <p className="products-feature">Secure API key management</p>
        <a 
          href="https://jetimworks-blog.github.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="products-cta"
        >
          Learn More →
        </a>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default Products
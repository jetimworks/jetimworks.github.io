function Products({ onBack }) {
  return (
    <div className="page products-page">
      <div className="products-box">
        <h1>KraftEmail</h1>
        <p className="products-byline">by Jetimworks</p>
        <p className="products-desc">Send beautiful transactional emails from your app with a simple API call.</p>
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
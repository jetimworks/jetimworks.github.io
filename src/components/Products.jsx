function Products({ onBack }) {
  return (
    <div className="page products-page">
      <div className="products-box">
        <h1>
          <a href="https://kraftmail.jetimworks.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            KraftMail
          </a>
        </h1>
        <p className="products-byline">by Jetimworks</p>
        <p className="products-desc">Send properly structured emails in both text and HTML layouts in just a few clicks.</p>
        <a 
          href="https://kraftmail.jetimworks.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="products-cta"
        >
          Learn More →
        </a>
      </div>
      <button className="back-button products-back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default Products
function Products({ onBack }) {
  return (
    <div className="page products-page">
      <div className="products-content">
        <h1>Coming Soon</h1>
        <p>We're working on something exciting. Stay tuned!</p>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default Products

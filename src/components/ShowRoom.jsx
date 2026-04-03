function ShowRoom({ onBack }) {
  return (
    <div className="page showroom-page">
      <div className="showroom-image">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
          alt="Tech Project" 
        />
      </div>
      <div className="showroom-content">
        <h2>Project 1</h2>
        <p>
          This is a showcase of our innovative project. We combine cutting-edge 
          technology with creative solutions to deliver exceptional results.
          Our team specializes in building robust, scalable applications that 
          push the boundaries of what's possible.
        </p>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default ShowRoom

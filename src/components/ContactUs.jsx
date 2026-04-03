function ContactUs({ onBack }) {
  return (
    <div className="page contactus-page">
      <div className="contactus-content">
        <h1>Contact Us</h1>
        <p>contact us at info@jetimworks.com</p>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default ContactUs

function ContactUs({ onBack }) {
  return (
    <div className="page contactus-page">
      <div className="contactus-content">
        <h1>Contact Us</h1>
        <p><a href="mailto:info@jetimworks.com">info@jetimworks.com</a></p>
        <p className="book-meeting"><a href="https://calendly.com/jetimworks/30min" target="_blank" rel="noopener noreferrer">Or book a meeting here.</a></p>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default ContactUs

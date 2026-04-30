import { motion } from 'framer-motion'

function ContactSection() {
  return (
    <section className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Let's Build Together</h2>
        <p className="contact-subtitle">
          Have a project in mind? We'd love to hear about it.
        </p>

        <div className="contact-buttons">
          <a href="mailto:info@jetimworks.com" className="contact-email">
            info@jetimworks.com
          </a>

          <motion.a
            href="https://calendly.com/jetimworks"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-calendly"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Schedule a Meeting
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
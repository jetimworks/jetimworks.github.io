import { motion } from 'framer-motion'

function PhilosophySection() {
  return (
    <section className="philosophy">
      <motion.div
        className="philosophy-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="philosophy-label">Our Philosophy</p>

        <motion.h2
          className="philosophy-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          "We don't follow the well-worn path. <span>We forge new ones.</span>"
        </motion.h2>

        <motion.div
          className="philosophy-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="philosophy-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          At Jetimworks, we thrive where others hesitate. We are risk takers who see challenges as opportunities — attacking complex problems with technical excellence and unconventional thinking. From AI research to server infrastructure, we build what others say can't be built.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default PhilosophySection
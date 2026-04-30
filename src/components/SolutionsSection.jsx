import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const solutions = [
  {
    id: 'kraftmail',
    icon: 'K',
    name: 'KraftMail',
    tagline: 'AI-Powered Email Crafting',
    description: 'Transform raw ideas into compelling, professional emails in seconds. Built for B2B sales, partnerships, and client outreach — people who value speed and reliability over flashy features.',
    features: ['AI Enhancement', 'Dual Modes', 'HTML Editor', 'Email History'],
    tech: ['Go', 'Resend', 'Anthropic AI'],
    link: 'https://kraftmail.jetimworks.com'
  },
  {
    id: 'golang',
    icon: 'Go',
    name: 'Golang Runtime',
    tagline: 'Intelligent Error Management',
    description: 'An advanced error handling and debugging system for Go programs. Automatically parses panic stack traces to extract detailed error information with precise locations and code highlighting.',
    features: ['Stack Trace Parsing', 'Code Highlighting', 'Error Categorization', 'Multi-layer Wrapping'],
    tech: ['Go', 'Errors Package', 'Stack Trace Analysis'],
    link: 'https://profile.jetimworks.com/golang-runtime.html'
  },
  {
    id: 'ai',
    icon: 'AI',
    name: 'AI Sentiment Research',
    tagline: 'Multi-Pipeline Sentiment Analysis',
    description: 'Research project developing advanced ML techniques for analyzing sentiment in West-African Pidgin language text. A two-stage pipeline with subject classifier and fine-tuned cross-lingual models.',
    features: ['81% Classifier Accuracy', '74.5% F1 Score', 'Transfer Learning', 'African Languages'],
    tech: ['Python', 'NLP', 'XLM-R', 'AfriBerta', 'Logistic Regression'],
    link: 'https://profile.jetimworks.com/sentiment-analysis.html'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const SolutionsSection = forwardRef((props, ref) => {
  return (
    <section className="solutions" ref={ref}>
      <div className="solutions-header">
        <h2 className="solutions-title">Building<br />the Future</h2>
        <p className="solutions-subtitle">
          Our work speaks for itself. Cutting-edge solutions that push boundaries and solve real problems.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <motion.a
            key={solution.id}
            href={solution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="solution-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ y: -4 }}
          >
            <div className="solution-card-header">
              <div className="solution-icon">{solution.icon}</div>
              <svg className="solution-link" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>

            <h3 className="solution-name">{solution.name}</h3>
            <p className="solution-tagline" style={{ fontSize: 'var(--text-sm)', color: 'var(--green)', marginBottom: 'var(--space-3)', opacity: 0.8 }}>
              {solution.tagline}
            </p>
            <p className="solution-description">{solution.description}</p>

            <div className="solution-features">
              {solution.features.map((feature) => (
                <span key={feature} className="solution-feature">{feature}</span>
              ))}
            </div>

            <div className="solution-tech-stack">
              {solution.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
})

SolutionsSection.displayName = 'SolutionsSection'

export default SolutionsSection
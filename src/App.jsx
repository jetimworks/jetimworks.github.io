import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import SolutionsSection from './components/SolutionsSection'
import PhilosophySection from './components/PhilosophySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const solutionsRef = useRef(null)

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <HeroSection onExplore={scrollToSolutions} />
      <SolutionsSection ref={solutionsRef} />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
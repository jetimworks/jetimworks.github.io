import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ShowRoom from './components/ShowRoom'
import ContactUs from './components/ContactUs'
import FunFact from './components/FunFact'
import Products from './components/Products'

function App() {
  const [currentPage, setCurrentPage] = useState('hero')
  const [isFlipped, setIsFlipped] = useState(false)

  const navigateTo = (page) => {
    setIsFlipped(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsFlipped(false)
    }, 500)
  }

  const goBack = () => {
    setIsFlipped(true)
    setTimeout(() => {
      setCurrentPage('hero')
      setIsFlipped(false)
    }, 500)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'showroom':
        return <ShowRoom onBack={goBack} />
      case 'contactus':
        return <ContactUs onBack={goBack} />
      case 'funfact':
        return <FunFact onBack={goBack} />
      case 'products':
        return <Products onBack={goBack} />
      default:
        return <HeroSection onNavigate={navigateTo} />
    }
  }

  return (
    <div className="app-container">
      <motion.div
        className={`page-container ${isFlipped ? 'flipped' : ''}`}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
        style={{ transformStyle: 'preserve-3d', position: 'absolute', width: '100%', height: '100%' }}
      >
        {renderPage()}
      </motion.div>
    </div>
  )
}

export default App

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
    }, 1200)
  }

  const goBack = () => {
    setIsFlipped(true)
    setTimeout(() => {
      setCurrentPage('hero')
      setIsFlipped(false)
    }, 1200)
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
        initial={{ rotateY: 0, scale: 1 }}
        animate={{ 
          rotateY: isFlipped ? 90 : 0,
          scale: isFlipped ? 0.95 : 1
        }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'absolute', width: '100%', height: '100%' }}
      >
        {renderPage()}
      </motion.div>
    </div>
  )
}

export default App

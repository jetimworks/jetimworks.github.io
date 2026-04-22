import { useState } from 'react'

const projects = [
  {
    id: 'mclabor',
    title: 'McLabor',
    summary: 'Automated office-to-home data backup and network management, enabling seamless operations across multiple locations.',
    image: '/images/projects/mclabor.png',
    skills: ['Golang', 'Python', 'Automation'],
    url: 'https://mclabor.com/'
  },
  {
    id: 'lena',
    title: 'Lena',
    summary: 'Educational software reshaping learning and teaching in Nigeria. Developed for HackNG, this comprehensive platform manages both learning and teaching workflows with intuitive tools for course delivery and student engagement.',
    image: '/images/thumbnails/lena.avif',
    skills: ['Python', 'Postgres', 'Golang'],
    url: 'https://lena.africa/'
  },
  {
    id: 'circula',
    title: 'Circula',
    summary: 'Inventory management enabling a cleaner world through recycling. Streamlines the process of tracking and managing recycled materials with comprehensive tools for businesses committed to sustainability.',
    image: '/images/thumbnails/circula.png',
    skills: ['Golang', 'Python', 'Postgres'],
    url: 'https://www.instagram.com/circulahq/'
  },
  {
    id: 'reccur',
    title: 'Reccur Payment',
    summary: 'Payment and payroll management system with robust database architecture. Provides comprehensive tools for managing financial transactions, recurring payments, and payroll processing.',
    image: '/images/thumbnails/reccur.png',
    skills: ['Postgres', 'Python', 'JavaScript'],
    url: 'https://tryreccur.com/'
  },
  {
    id: 'airgateway',
    title: 'AirGateway',
    summary: 'Flight booking management with integrated APIs. A sophisticated system that integrates multiple APIs to enhance the flight booking experience with real-time data and automated confirmations.',
    image: '/images/thumbnails/airgateway.png',
    skills: ['Golang', 'APIs', 'Python'],
    url: 'https://airgateway.com/'
  },
  {
    id: 'bookingninjas',
    title: 'Booking Ninjas',
    summary: 'Property management with Salesforce and AI/ML integration. Comprehensive property management solutions leveraging cutting-edge AI technologies for intelligent automation and customer engagement.',
    image: '/images/thumbnails/bookingninjas.png',
    skills: ['Golang', 'AI/ML', 'Salesforce'],
    url: 'https://www.bookingninjas.com/'
  }
]

function ShowRoom({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="page showroom-page">
      <div className="showroom-image">
        {currentProject.url ? (
          <a href={currentProject.url} target="_blank" rel="noopener noreferrer">
            <img src={currentProject.image} alt={currentProject.title} />
          </a>
        ) : (
          <img src={currentProject.image} alt={currentProject.title} />
        )}
      </div>
      <div className="showroom-content">
        {currentProject.url ? (
          <h2>
            <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="showroom-title-link">
              {currentProject.title}
            </a>
          </h2>
        ) : (
          <h2>{currentProject.title}</h2>
        )}
        <p className="showroom-description">{currentProject.summary}</p>
        <div className="skills-container">
          {currentProject.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        <div className="showroom-nav-container">
          <button 
            className="showroom-nav-button" 
            onClick={handlePrev}
            aria-label="Previous project"
          >
            ←
          </button>
          <span className="showroom-nav-counter">
            {currentIndex + 1} / {projects.length}
          </span>
          <button 
            className="showroom-nav-button" 
            onClick={handleNext}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default ShowRoom
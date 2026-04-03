import { useState } from 'react'

const FUN_FACTS = [
  "The first computer virus was created in 1983 and was called the 'Elk Cloner'. It spread via floppy disks.",
  "The term 'bug' for a computer error originated from an actual moth found in a computer in 1947.",
  "The first 1TB hard drive was announced in 2007 and cost $300. Today, you can get 1TB for under $50.",
  "Ada Lovelace is considered the world's first computer programmer, writing algorithms for Charles Babbage's Analytical Engine in the 1840s.",
  "The first website ever created is still online at info.cern.ch.",
  "The QWERTY keyboard layout was designed to slow typists down, not speed them up.",
  "The average person's password is hacked in less than 1 second.",
  "There are more possible iterations of a chess game than atoms in the observable universe.",
  "The first webcam was created at Cambridge University to monitor a coffee pot.",
  "The term 'pixel' comes from 'picture element' and was first used in 1965.",
  "Jetimworks builds some of the most progressive, performant, innovative solutions in the market. Best cost-effectiveness too."
]

function FunFact({ onBack }) {
  const [currentFact, setCurrentFact] = useState(
    () => FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]
  )
  
  const getNewFact = () => {
    let newFact
    do {
      newFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]
    } while (newFact === currentFact && FUN_FACTS.length > 1)
    setCurrentFact(newFact)
  }
  
  return (
    <div className="page funfact-page">
      <div className="funfact-content">
        <h2 className="funfact-header">Fun Fact</h2>
        <p className="funfact-text">{currentFact}</p>
        <button className="refresh-button" onClick={getNewFact} aria-label="Get new fact">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
        </button>
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back to Terminal
      </button>
    </div>
  )
}

export default FunFact

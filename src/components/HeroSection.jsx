import { useState, useEffect, useRef } from 'react'

const COMMANDS = [
  { cmd: '/show-room', page: 'showroom', label: 'View our showcase' },
  { cmd: '/contact-us', page: 'contactus', label: 'Get in touch' },
  { cmd: '/products', page: 'products', label: 'Explore our products' }
]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [breakpoint])
  
  return isMobile
}


function HeroSection({ onNavigate }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [userInput, setUserInput] = useState('')
  const [autocomplete, setAutocomplete] = useState('')
  const inputRef = useRef(null)
  const isMobile = useIsMobile()
  
  const fullText = 'Building the Future'
  
  useEffect(() => {
    if (isTyping) {
      let index = 0
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(timer)
          setIsTyping(false)
        }
      }, 80)
      return () => clearInterval(timer)
    }
  }, [isTyping])
  
  useEffect(() => {
    // Only auto-focus on desktop
    if (!isMobile && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isMobile])
  
  useEffect(() => {
    // Only auto-focus after typing on desktop
    if (!isTyping && !isMobile && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isTyping, isMobile])
  
  const handleInputChange = (e) => {
    let value = e.target.value.toLowerCase()
    
    // Prepend slash if first character isn't one (subtle, don't show it)
    if (value.length > 0 && value[0] !== '/') {
      value = '/' + value
    }
    
    setUserInput(value)
    
    if (value.length === 0) {
      setAutocomplete('')
      return
    }
    
    const partialMatch = COMMANDS.find(cmd => 
      cmd.cmd.toLowerCase().startsWith(value)
    )
    
    if (partialMatch) {
      setAutocomplete(partialMatch.cmd)
    } else {
      setAutocomplete('')
    }
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const match = COMMANDS.find(cmd => 
        cmd.cmd.toLowerCase() === userInput
      )
      if (match) {
        onNavigate(match.page)
      }
    } else if (e.key === 'ArrowRight' && autocomplete) {
      const match = COMMANDS.find(cmd => 
        cmd.cmd.toLowerCase().startsWith(userInput)
      )
      if (match) {
        setUserInput(match.cmd)
        setAutocomplete('')
      }
    } else if (e.key === ' ' && autocomplete && userInput.length > 0) {
      e.preventDefault()
      const match = COMMANDS.find(cmd => 
        cmd.cmd.toLowerCase().startsWith(userInput)
      )
      if (match) {
        setUserInput(match.cmd)
        setAutocomplete('')
      }
    }
  }
  
  const handleCommandClick = (page) => {
    onNavigate(page)
  }
  
  return (
    <>
      <div className="page hero-section">
        <div className="terminal-container">
          <div className="terminal-header">
            JETIMWORKS CONSULTING v1.0
          </div>
          <div className="terminal-body">
            <div className="typing-text">
              <span className="dizzy-effect">{displayText}</span>
              {isTyping && <span className="cursor"></span>}
            </div>
            
            <div className="commands-list">
              <p className="commands-label">Available Commands:</p>
              {COMMANDS.map((cmd) => (
                <p key={cmd.cmd} className="command-item">
                  <span 
                    className="command-name"
                    onClick={() => handleCommandClick(cmd.page)}
                  >
                    {cmd.cmd}
                  </span>
                  <span className="commands-description"> - {cmd.label}</span>
                </p>
              ))}
            </div>
            
            {!isMobile && (
              <div className="input-line" onClick={() => inputRef.current?.focus()}>
                <span className="prompt">$</span>
                <div className="command-input-container">
                  <span className="autocomplete">{autocomplete}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    className="command-input"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter command..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection

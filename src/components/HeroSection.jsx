import { useState, useEffect, useRef, useMemo } from 'react'

const COMMANDS = [
  { cmd: '/show-room', page: 'showroom', label: 'View our showcase' },
  { cmd: '/contact-us', page: 'contactus', label: 'Get in touch' },
  { cmd: '/fun-fact', page: 'funfact', label: 'Random tech facts' },
  { cmd: '/products', page: 'products', label: 'Explore our products' }
]

function BinaryRain() {
  const columns = useMemo(() => {
    const cols = []
    const numColumns = 6
    for (let i = 0; i < numColumns; i++) {
      let binary = ''
      const length = Math.floor(Math.random() * 15) + 10
      for (let j = 0; j < length; j++) {
        binary += Math.random() > 0.5 ? '1' : '0'
        if (j < length - 1) binary += ' '
      }
      cols.push({
        id: i,
        left: `${(i / numColumns) * 100 + 2}%`,
        content: binary,
        duration: Math.floor(Math.random() * 8) + 12,
        delay: Math.random() * 4
      })
    }
    return cols
  }, [])

  return (
    <div className="binary-rain">
      {columns.map(col => (
        <div
          key={col.id}
          className="binary-column"
          style={{
            left: col.left,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`
          }}
        >
          {col.content}
        </div>
      ))}
    </div>
  )
}

function HeroSection({ onNavigate }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [userInput, setUserInput] = useState('')
  const [autocomplete, setAutocomplete] = useState('')
  const inputRef = useRef(null)
  
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
      }, 100)
      return () => clearInterval(timer)
    }
  }, [isTyping])
  
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isTyping])
  
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase()
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
      // Fill autocomplete but don't execute
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
      <BinaryRain />
      <div className="page hero-section">
        <div className="terminal-container">
          <div className="terminal-header">
            JETIMWORKS TERMINAL v1.0
          </div>
          <div className="terminal-body">
            <div className="typing-text">
              <span className="dizzy-effect">{displayText}</span>
              {isTyping && <span className="cursor"></span>}
            </div>
            
            <div className="commands-list">
              <p>Available Commands:</p>
              {COMMANDS.map((cmd) => (
                <p 
                  key={cmd.cmd}
                  className="command-item"
                  onClick={() => handleCommandClick(cmd.page)}
                  style={{ cursor: 'pointer' }}
                >
                  {cmd.cmd} - {cmd.label}
                </p>
              ))}
            </div>
            
            <div className="input-line" onClick={() => inputRef.current?.focus()}>
              <span className="prompt">$</span>
              <div style={{ position: 'relative', display: 'flex' }}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection

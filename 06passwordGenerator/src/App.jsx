import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])





  return (
    <>
      <div className="outer">
        <div className="main">
          <h2 className="heading">Password Generator</h2>
          <div className="first-div">
            <input
              type="text"
              name=""
              id="text"
              value={password}
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button className="copy"
              onClick={copyPassword}
            >copy</button>
          </div>
          <div className="second-div">
            <div className="slider">
              <input
                type="range"
                name=""
                id="range"
                min={6}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length">Length:{length}</label>
            </div>
            <div className="check-one">
              <input
                type="checkbox"
                name=""
                id="number"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="number">Number</label>
            </div>
            <div className="check-two">
              <input
                type="checkbox"
                name=""
                id="char"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="char">Char</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

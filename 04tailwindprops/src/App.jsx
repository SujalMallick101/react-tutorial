import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <div className="app-div">
          <h1 className="text-3xl font-bold">Vite with Tailwind</h1>
        <Cards username="Sujal"
        passion="software engineer"
        />
        </div>
      </>
    )
  }

export default App

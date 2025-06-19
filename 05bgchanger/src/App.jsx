import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="main" style={{backgroundColor:color}}>
      <div className="btn-div">
        <button id='red'
        onClick={()=>setColor('red')}
        >Red</button>
        <button id='blue'
        onClick={()=>setColor('blue')}
        >Blue</button>
         <button id='green'
        onClick={()=>setColor('green')}
        >Green</button>
      </div>
    </div>
  )
}

export default App

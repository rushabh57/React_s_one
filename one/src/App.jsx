import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1 , setCount1] = useState(0)

  return (
    <>
      <h1>Hello my first <br /> React App</h1>
      <div className="card">
        <button  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* ===== */}
        <button onClick={() => setCount1((count) => count + 5)}>
          count is {count1}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-row justify-between">
    <h1 className='text-6xl bg-red-300'>Recipes</h1>
     <h1>Search</h1>

    </div>
    </>
  )
}

export default App

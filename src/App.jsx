import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Cooks from './Components/Cooks/Cooks'
import { useState } from "react";


function App() {
  const [cooks, setCooks] = useState([])

  const handleAddToCooks = recipe =>{
      const newCooks = [...cooks, recipe];
      setCooks(newCooks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex flex-row justify-between my-12 mx-8'>
          <Recipes handleAddToCooks={handleAddToCooks}></Recipes>
          <Cooks cooks={cooks}></Cooks>
      </div>
    </>
  )
}

export default App

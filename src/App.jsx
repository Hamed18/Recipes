import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Cooks from './Components/Cooks/Cooks'
import { useState } from "react";


function App() {
  const [cooks, setCooks] = useState([])

  const handleAddToCooks = recipe =>{
     //   console.log("Lift up the state")
         const newCooks = [...cooks, recipe];
         setCooks(newCooks);
  }

  const [currentlyCookings, setCurrentlyCooking] = useState([])

	const handleCurrentlyCooking = (currentlyCooking,ID) =>{
		console.log(ID)
		const newCurrentlyCookings = [...currentlyCookings, currentlyCooking];
		setCurrentlyCooking(newCurrentlyCookings);

    //setCooks(prevCooks => prevCooks.filter(cook => cook.ID !== ID))  {/* syntax error: cook.ID !== ID */}
    const newCooks = cooks.filter(cook => cook.recipe_id !== ID)   
    setCooks(newCooks);
    console.log(cooks);
	}

  return (
    <>
      <Header></Header>
      <div className='md:flex flex-row justify-between my-12 mx-8'>
          <Recipes handleAddToCooks={handleAddToCooks}></Recipes>
          <Cooks cooks={cooks} handleCurrentlyCooking={handleCurrentlyCooking} currentlyCookings={currentlyCookings}></Cooks>
      </div>
    </>
  )
}

export default App
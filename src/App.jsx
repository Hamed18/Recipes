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

  const [timeNeeded, setTimeNeeded] = useState(0);
  const [cal, setCalories] = useState(0);

	const handleCurrentlyCooking = (currentlyCooking,ID,time,calri) =>{
		//console.log(ID)
		const newCurrentlyCookings = [...currentlyCookings, currentlyCooking];
		setCurrentlyCooking(newCurrentlyCookings);

    //setCooks(prevCooks => prevCooks.filter(cook => cook.ID !== ID))  {/* syntax error: cook.ID !== ID */}
    const newCooks = cooks.filter(cook => cook.recipe_id !== ID)   
    setCooks(newCooks);
    console.log(cooks);

    // update preparing time and calories
    setTimeNeeded(timeNeeded+time);
    setCalories(cal+calri);
    console.log(timeNeeded);
    console.log(calories);

	}

  return (
    <>
      <Header></Header>
      <div className='md:flex flex-row justify-between my-12 mx-8'>
          <Recipes handleAddToCooks={handleAddToCooks}></Recipes>
          <Cooks cooks={cooks} handleCurrentlyCooking={handleCurrentlyCooking} currentlyCookings={currentlyCookings}
                      timeNeeded={timeNeeded}  cal={cal}>
          </Cooks>
      </div>
    </>
  )
}

export default App
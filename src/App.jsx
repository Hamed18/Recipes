import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Cooks from './Components/Cooks/Cooks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex flex-row justify-between my-12 mx-8'>
          <Recipes></Recipes>
          <Cooks></Cooks>
      </div>
    </>
  )
}

export default App

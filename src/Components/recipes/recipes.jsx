import { useEffect } from "react";
import { useState } from "react";
import Recipe from '../Recipe/Recipe'
import './Recipes.css'

const Recipes = ( {handleAddToCooks} ) => {
	const [recipes, setRecipes] = useState([]);
  //  console.log(handleAddToCooks)
  
	useEffect( () =>{
       fetch('recipes.json')
	   .then(res => res.json())
	//   .then(data => console.log(data))
	     .then(data => setRecipes(data))
	},[])

	return (
		    <div className="recipes-container">
			   {
				recipes.map(recipe =>  <Recipe
					    handleAddToCooks={handleAddToCooks} 
					    key={recipe.recipe_id}
						recipe={recipe}>    
					 </Recipe>)
			   }
			</div>
	);
};

export default Recipes;
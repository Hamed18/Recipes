import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect( () =>{
       fetch('recipes.json')
	   .then(res => res.json())
	//   .then(data => console.log(data))
	     .then(data => setRecipes(data))
	},[])

	return (
		<div className="md:w-60">
			<h3>Recipes length: {recipes.length}</h3>
		</div>
	);
};

export default Recipes;
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ( {recipe, handleAddToCooks} ) => {
     const [CookBtn,setCookBtn] = useState(true);

	// console.log( handleAddToCooks )
	const {recipe_img,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
	return (
		<div className="p-4 m-4 border border-green-500 rounded-xl w-[350px]">
			<img src={recipe_img} alt="" className="rounded-xl w-full h-[250px]" />  {/* syntax error: "{recipe_img}" */}
			<h2 className="text-2xl font-bold py-2">{recipe_name}</h2>
			<span className="text-xl py-2">{short_description}</span>
			<hr />
			<h4 className="text-2xl font-bold py-2">Ingredients: {ingredients.length}</h4>

			<ul className="list-disc ml-4 pb-2">    {/* syntax error alert */}
			    {ingredients.map((ingredient, idx) => (
                      <li key={idx}> <span>{ingredient}</span> </li>
                ))}
			</ul>
			<hr />

			<div className="flex flex-row justify-between py-2">
				<div className="p-2">
					<p>{preparing_time} minutes</p>
				</div>
				<div className="p-2">
					<p>{calories} calories</p>
				</div>
			</div>

			<button onClick={() => {     
				 if (CookBtn === true) {
					handleAddToCooks(recipe);
					setCookBtn(false);
				 }

				 else {
					toast("Already Exist!");
				 }
			}} 
			className="btn py-2 px-3 rounded-xl bg-green-500 hover:bg-green-900 hover:shadow-xl text-white">
				Want to Cook
			</button>
			<ToastContainer/>   {/* Remember to add */}
		</div>
	);
};

export default Recipe;
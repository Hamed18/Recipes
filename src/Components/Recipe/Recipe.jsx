
const Recipe = ( {recipe} ) => {
	const {recipe_img,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
	return (
		<div className="p-4 m-4 border border-red-500 rounded-xl">
			<img src={recipe_img} alt="" className="rounded-xl" />  {/* syntax error: "{recipe_img}" */}
			<h2 className="text-2xl font-bold py-2">{recipe_name}</h2>
			<span className="text-xl py-2">{short_description}</span>
			<hr />
			<h4 className="text-2xl font-bold py-2">Ingredients: {ingredients.length}</h4>

			<ul className="list-disc ml-4">    {/* syntax error alert */}
			    {ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                ))}
			</ul>
			<hr />

			<div className="flex flex-row justify-between">
				<div className="p-2">
					<p>{preparing_time} minutes</p>
				</div>
				<div className="p-2">
					<p>{calories} calories</p>
				</div>
			</div>

			<button className="py-2 px-3 rounded-xl bg-green-500 hover:bg-green-900 hover:shadow-xl text-white">Want to Cook</button>


		</div>
	);
};

export default Recipe;
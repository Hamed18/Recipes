
const Cook = ({cook,handleCurrentlyCooking}) => {
	const {recipe_id,recipe_name,preparing_time,calories} = cook;
	return (
		<div>
			<div className="p-2 m-2 border border-red-500 rounded-xl flex flex-row justify-between">
			    <h3> {recipe_id} </h3>
			    <p className="text-center">{recipe_name}</p>
				<p className="text-center">{preparing_time}</p>
				<p className="text-center">{calories}</p>
				<button onClick={handleCurrentlyCooking} className="btn py-2 px-3 rounded-xl bg-green-500 hover:bg-green-900 hover:shadow-xl text-white">Preparing</button>
			</div>

			<hr />

		</div>
	);
};

export default Cook;
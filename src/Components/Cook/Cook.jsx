
const Cook = ({cook,count,handleCurrentlyCooking}) => {
	const {recipe_id,recipe_name,preparing_time,calories} = cook;
	return (
		<div>
			<div className="p-2 m-2 border border-green-500 rounded-xl flex flex-row justify-between bg-gray-200">
			    <h3> {count+1} </h3>
			    <p className="text-center">{recipe_name}</p>
				<p className="text-center">{preparing_time} min</p>
				<p className="text-center">{calories} cal</p>
				<button onClick={()=>handleCurrentlyCooking(cook,recipe_id,preparing_time,calories)} className="btn py-2 px-3 rounded-xl bg-green-500 hover:bg-green-900 hover:shadow-xl text-white">Preparing</button>
			</div>

			<hr />

		</div>
	);
};

export default Cook;
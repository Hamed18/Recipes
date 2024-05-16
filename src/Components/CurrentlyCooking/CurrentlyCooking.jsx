
const CurrentlyCooking = ({currentlyCooking,count2}) => {
	const { recipe_name,preparing_time,calories } = currentlyCooking;

	return (
		<div>
			<div className="p-2 m-2 border border-red-500 rounded-xl flex flex-row justify-between">
			    <h3> {count2+1} </h3>
			    <p className="text-center">{recipe_name}</p>
				<p className="text-center">{preparing_time} min</p>
				<p className="text-center">{calories}</p>
			</div>
		</div>
	);
};

export default CurrentlyCooking;
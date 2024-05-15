import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
import Cook from '../Cook/Cook'
import { useState } from "react";

const Cooks = ( {cooks}) => {

	const [currentlyCookings, setCurrentlyCooking] = useState([])

	const handleCurrentlyCooking = currentlyCooking =>{
		const newCurrentlyCookings = [...currentlyCookings, currentlyCooking];
		setCurrentlyCooking(newCurrentlyCookings);
	}
  
	return (
		<div className="w-1/3 border border-red-500 rounded-xl">
           	<h3 className="text-center my-2 font-bold">Want To Cook: {cooks.length}</h3>
			<div className="mb-8 mx-4 flex flex-row justify-between">
				<p className="text-center">Name</p>
				<p className="text-center">Time</p>
				<p className="text-center">Calories</p>
			</div>
			<hr />
            
			<div>
				{
					cooks.map(cook =>
						<Cook key={Cook.id} cook={cook} handleCurrentlyCooking={handleCurrentlyCooking}>
						</Cook>
					)
				}
			</div>

			<div className="my-4">
			  <h3 className="text-center my-2 font-bold">Currently Cooking: {currentlyCookings.length}</h3>

			  <div className="mb-8 mx-4 flex flex-row justify-between">
				<p className="text-center">Name</p>
				<p className="text-center">Time</p>
				<p className="text-center">Calories</p>
			  </div>
			  <hr />
             
			  <div>
				{
					currentlyCookings.map((currentlyCooking,idx) =>
						<CurrentlyCooking key={currentlyCooking.idx} currentlyCooking={currentlyCookings}>
						</CurrentlyCooking>
					)
				}
			  </div>

			  

			</div>

		</div>
	);
};

export default Cooks;


			{/*
			<h3 className="text-center my-2 font-bold">Want To Cook: </h3>
			<hr />
			<div className="flex flex-row justify-between gap-4">
						<h5 className="text-center">Name</h5>
						<h5 className="text-center">Time</h5>
						<h5 className="text-center">Calories</h5>
			</div>
			<hr />

			* dynamic want to cook section *
			<div className=" bg-gray-100 border border-red-400 p-2 rounded-xl m-2">
			<div className="lg:flex lg:flex-row justify-around gap-2 sm:flex-col">
				<h3 className="max-w-3">1</h3>
                <div className="flex flex-row justify-between gap-8">
						<h5 className="text-center">a {}</h5>
						<h5 className="text-center">b {}</h5>
						<h5 className="text-center">c {}</h5>
				</div>
			</div>
			<div className="flex justify-center items-center">
					<h2 className="text-center">Preparing</h2>
			</div>

			</div>

						// dynamic currently cooking section 
			<h3 className="text-center my-2 font-bold">Currently Cooking: </h3>
			<hr />

			<div className="my-8 bg-gray-100 border border-red-400 p-2 rounded-xl mx-2 flex flex-row gap-2">
			<h3 className="max-w-3">1</h3>
			<div>
			<div className="flex flex-row justify-between gap-4 my-3">
						<h5 className="text-center">Name</h5>
						<h5 className="text-center">Time</h5>
						<h5 className="text-center">Calories</h5>
			</div>
			<hr />
            <div className="flex flex-row justify-between gap-4">
						<h5 className="text-center">a {}</h5>
						<h5 className="text-center">b {}</h5>
						<h5 className="text-center">c {}</h5>
			</div>
			</div>

			<div className="flex justify-center items-center">
					<h2 className="text-center">Preparing</h2>
			</div>

			</div>

			*/}



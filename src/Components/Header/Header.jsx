import bannerImg from '../../assets/Images/banner.png';
import recipeIcon from '../../assets/Images/recipe-icon.png';

const Header = () => {
	return (
	 <header className="m-4">
        
    <div className="nav flex flex-row justify-between m-4 p-4">
			<h3 className="font-bold text-2xl">Homemade Recipes</h3>
			<ul className="flex flex-row justify-between gap-4 p-2 bg-base-100 rounded-t-none">
					<li className='hover:text-gray-100 hover:bg-green-800 p-2 mx-4 rounded-xl font-bold'><a href="">Home</a></li>
					<li className='hover:text-gray-100 hover:bg-green-800 p-2 mx-4 rounded-xl font-bold'><a href="">Recipes</a></li>
					<li className='hover:text-gray-100 hover:bg-green-800 p-2 mx-4 rounded-xl font-bold'><a href="">About</a></li>
					<li className='hover:text-gray-100 hover:bg-green-800 p-2 mx-4 rounded-xl font-bold'><a href="">Search</a></li>
			</ul>
      <div className="flex flex-row gap-2 justify-center">
          <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto border border-green-500 rounded-xl p-2" />
          </div>
          <img src={recipeIcon} alt="" className="mx-0 rounded-xl w-12 h-12" />
      </div>

		</div>

		<div className="relative w-full h-96 bg-cover bg-center rounded-xl " style={{backgroundImage: `url(${bannerImg})`}}>
        {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-50 text-black text-center">
        {/* Banner Title */}
        <h2 className="text-3xl font-bold text-white-800">
          Discover an exceptional cooking class tailored for you!
        </h2>

        {/* Banner Description */}
         <p className="mt-2 text-16 font-normal opacity-75 text-white-800">
	          exploring new dishes, improving their culinary skills, and enjoying the pleasures of cooking and sharing delicious meals with others.
        </p>
        <div className="flex justify-center mt-5 gap-4">
           {/* Button with Green Background and White Text */}
           <a href="#buy-ticket" className="bg-green-500 text-white font-bold p-3 rounded hover:bg-green-600 uppercase">
              Explore now
           </a>
           <a href="#buy-ticket" className="bg-green-500 text-white font-bold p-3 rounded hover:bg-green-600 uppercase">
              Your Feedback
           </a>
        </div>
      </div>
    </div>

    <h2 className="text-center font-bold mt-8">Our Recipes</h2>
    <p className="text-center">Try the Recipes and taste with your family. <br/> Discover an exceptional cooking class tailored for you!</p>

   </header>



	);
};

export default Header;
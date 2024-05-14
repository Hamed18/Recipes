import bannerImg from '../../assets/Images/banner.png'

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
			<h3 className='bg-gray-100 hover:text-gray-100 hover:bg-green-800 p-2 mx-4 rounded-xl font-bold'>Search</h3>
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
        Our Feedback
      </a>
    </div>
  </div>
</div>

<h3 className="text-center font-bold my-8">Our Recipes</h3>
		<p className="text-center">Try the Recipes and taste with your family</p>

</header>



	);
};

export default Header;
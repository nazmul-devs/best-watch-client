import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
	return (
		<div className="mb-5">
			<Banner />
			<HomeProducts />
		</div>
	);
};

export default Home;

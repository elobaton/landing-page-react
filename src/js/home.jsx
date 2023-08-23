import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<div className="main-container">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
			
		</div>
	);
};

export default Home;
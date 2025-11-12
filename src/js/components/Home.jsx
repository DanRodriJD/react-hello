import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardSection from "./CardSection";
import Footer from "./Footer";


//create your first component

const Home = () => {
	return (
       <>
            <Navbar />
            <Jumbotron />
            <CardSection />
            <Footer />
        </>
    );
};

export default Home;
import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../../Components/Public/Navbar";
import Footer from "../../Components/Public/Footer";
import logo from '../../Style/Images/logo.png';
import ReviewsCarousel from "../../Components/Public/ReviewsCarousel";

function PublicLayout () {
    return (
            <div className="Layout">
                <header className="App-header">
                    <Link to="/">
                    <img className="logo" alt="logo" src={logo}></img>
                    </Link>
                    <  NavBar/>
                </header>
                <body>
                    <Outlet/>
                    <ReviewsCarousel/>
                </body>
                <footer>
                    <Footer/>
                </footer>
            </div>
    );
};

export default PublicLayout;
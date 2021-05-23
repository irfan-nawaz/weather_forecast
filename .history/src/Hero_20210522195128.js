import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./Hero.css";
const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      {/* <nav> */}
        <h2><a href="https://weatherapplicationse.netlify.app/" style={{color: "White", textDecoration: "none"}}>Home</a></h2>
        <h2><a href="https://openweathermap-cyan.vercel.app/" style={{color: "White", textDecoration: "none"}}>Weather maps</a></h2>
        <h2><a href="https://earth.nullschool.net/" style={{color: "White", textDecoration: "none"}}>global weather</a></h2>
         <nav class="navbar">
    <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
    <a href="#" class="logo">logo</a>
    <ul class="main-nav" id="js-menu">
      <li>
        <a href="#" class="nav-links">Home</a>
      </li>
      <li>
        <a href="#" class="nav-links">Products</a>
      </li>
      <li>
        <a href="#" class="nav-links">About Us</a>
      </li>
      <li>
        <a href="#" class="nav-links">Contact Us</a>
      </li>
      <li>
        <a href="#" class="nav-links">Blog</a>
      </li>
    </ul>
  </nav>
        
      {/* </nav> */}
          <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
    </section>
  );
};

export default Hero;

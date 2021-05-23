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
      <nav>
        {/* <h2><a href="https://weatherapplicationse.netlify.app/" style={{color: "White", textDecoration: "none"}}>Home</a></h2>
        <h2><a href="https://openweathermap-cyan.vercel.app/" style={{color: "White", textDecoration: "none"}}>Weather maps</a></h2>
        <h2><a href="https://earth.nullschool.net/" style={{color: "White", textDecoration: "none"}}>global weather</a></h2> */}

        
 
        <button onClick={handleLogout}>Logout</button>
      </nav>
          <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
    </section>
  );
};




export default Hero;

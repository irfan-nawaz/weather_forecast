import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";



const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>Home</a></button>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>Globe</a></button>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>Map</a></button>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>globe</a></button>

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

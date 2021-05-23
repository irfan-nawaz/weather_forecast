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
        {/* <h2><a herf="https://earth.nullschool.net/">Welcome</a></h2> */}
        <button onClick={handleLogout}>Logout</button>
          <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
    </section>
  );
};



export default Hero;

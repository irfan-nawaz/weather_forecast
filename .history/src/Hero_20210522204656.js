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
      <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      Weather forecast
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="https://weatherapplicationse.netlify.app/" >Home</a>
    <a href="https://openweathermap-cyan.vercel.app/" t">Weather maps</a>
    <a href="https://earth.nullschool.net/" target="_blank">Global weather</a>
    <a onClick={handleLogout}>Logout</a>
  </div>
</div>
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

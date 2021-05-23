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
      {/* <nav>
        <h2><a href="https://weatherapplicationse.netlify.app/" style={{color: "White", textDecoration: "none"}}>Home</a></h2>
        <h2><a href="https://openweathermap-cyan.vercel.app/" style={{color: "White", textDecoration: "none"}}>Weather maps</a></h2>
        <h2><a href="https://earth.nullschool.net/" style={{color: "White", textDecoration: "none"}}>global weather</a></h2>

        
 
        <button onClick={handleLogout}>Logout</button>
      </nav> */}




{/* <nav> */}
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
    <a href= target="_blank">Home</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Weather maps</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Global weather</a>
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

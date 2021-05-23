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
        <h2>Welcome</h2>
        <h2>
        {/* <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>home</a> HOME</button>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>globe</a>GLOBE</button>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>globe</a>GFLOBE</button>
        <button><a href="https://earth.nullschool.net/" style={{color: "white", textDecoration: "none"}}>globe</a> Globe</button> */}

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

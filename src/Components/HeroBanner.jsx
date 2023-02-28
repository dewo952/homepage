import React from "react";
import "../Styles/Hero.css";

import homevideo from "../Assets/homevideo1.mp4";
import NavBar from "./Navbar";

function HeroBanner() {
  return (
    <>
      <div className="main">
        <div className="overlay" />
        <video src={homevideo} autoPlay loop muted />
        <div className="content">
          <h1>
            Redefine the Way
            <br />
            You Do Business!
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;

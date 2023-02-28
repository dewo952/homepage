import React from "react";
import "../Styles/Hero.css";
import homevideo from "../Assets/homevideo1.mp4";
import { RiMenu5Fill } from "react-icons/ri";
import logo from "../Assets/logo.webp";

function HeroBanner() {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={homevideo} autoPlay loop muted />
        <div className="content">
          <div className="head">
            <a href="/#">
              <img src={logo} alt="" />
            </a>

            <div className="menu__button">
              <a href className="menu">
                <RiMenu5Fill size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;

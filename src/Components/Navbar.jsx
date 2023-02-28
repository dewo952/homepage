import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import "../Styles/Navbar.css";
import logo from "../Assets/logo.webp";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav__main">
        <nav className="nav__navbar">
          <div className="nav__logo">
            <img src={logo} alt="" color="white" />
          </div>
          <ul className="nav__ul">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <section></section>
    </>
  );
};

export default NavBar;

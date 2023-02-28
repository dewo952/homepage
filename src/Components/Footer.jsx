import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <>
    <div className="footer__border"/>
      <div className="container">
        {/* Left Side */}
        <div className="sub__container">
          <div className="margin__space">
            <h1 className="heading">Need Our Service?</h1>

            <div className="contact__us">
              <Link to="/contact">
                <h2>Contact Us</h2>
              </Link>
            </div>
          </div>

          <a href="mailto:info@rgs-tech.com" className="email__button">
            <h4>info@rgs-tech.com</h4>
          </a>

          <div className="company__address">
            <p>
              Hackettstown,
              <br />
              New Jersey 07840
            </p>

            <a href className="privacy__policy">
              <p>Privacy Policy</p>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="social__links">
          <ul className="social__links2">
            <li className="social__links3">
              <a href="https://www.facebook.com/RGSDigital/?view_public_for=280342016002143">
                Facebook
              </a>
            </li>

            <li className="social__links3">
              <a href="https://www.linkedin.com/company/rgs-tech/">LinkedIn</a>
            </li>

            <li className="social__links3">
              <a href="mailto:info@rgs-tech.com">Mail</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

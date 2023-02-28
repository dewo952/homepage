import React from "react";
import "../Styles/aboutus.css";
import { BsArrowRightCircle } from "react-icons/bs";


const AboutsUs = () => {

  return (
    <>
      <div className="abouts__container">
        <div className="aboutus__content">
          <p>/EXPERTISE</p>

          <h2>
            Your digital <br />
            solutions in one <br />
            place
          </h2>
        </div>
        <div className="aboutus__button">
          <h4>What we do</h4>
          <a href="/about">
            <BsArrowRightCircle size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutsUs;

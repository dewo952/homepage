import React from "react";
import "../Styles/aboutcontent.css";
const AboutsUsContend = () => {
  return (
    <>
      <div className="about__credit">
        Ma
        <section>
          <div className="about__image">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"
              alt=""
            />
          </div>

          <div className="about__content">
            <h2>About Us</h2>
            <span></span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloribus, deserunt nostrum nesciunt eligendi beatae sint
              voluptates odit saepe atque, earum dolore aliquam repudiandae
              temporibus, pariatur maiores vero ut impedit.
            </p>
            <ul className="about__links"></ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutsUsContend;

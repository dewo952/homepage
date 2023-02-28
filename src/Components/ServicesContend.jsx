import React, { useState } from "react";

import "../Styles/ServicesContend.css";
import Services from "./Services";
import dataengine from "../Assets/dataengine.png";
import datatransformation from "../Assets/datatransformation.png";
import cloud from "../Assets/cloud.png";
import consulting from "../Assets/Consulting.png";

const ServicesContend = () => {
  const [cards] = useState([
    {
      title: "Data Engineering and Solutions",
      image: dataengine,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
    {
      title: "Digital Engineering and Transformation",
      image: datatransformation,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.", 
    },
    {
      title: "Cloud Engineering and Platforms",
      image: cloud,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
    {
      title: "Consulting and Advisory",
      image: consulting,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
  ]);
  return (
    <>
      <div className="services__con__main">
      <div className="services__con__main2">
        
        <section className="services__con__section">
          <div className="services__con__container">
            <h1 className="services__con__heading">We Provide Services</h1>
            <div className="services__con__cards">
              {cards.map((card, i) => (
                <div key={i} className="services__con__card">
                  <img src={card.image} alt="" width="20%" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Services />
      </div>
    </>
  );
};

export default ServicesContend;

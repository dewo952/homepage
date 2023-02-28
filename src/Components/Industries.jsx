import React, { useState } from "react";
import "../Styles/industries.css";
import bank from "../Assets/bank.png";
import travel from "../Assets/airplane.png";
import health from "../Assets/health.png";
import goods from "../Assets/product.png";
import telecom from "../Assets/broadcast.png";
const Industries = () => {
  const [cards] = useState([
    {
      title: "Banking, Insurance and Financial Services",
      image: bank,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
    {
      title: "Travel, Transportation and Hospitality      ",
      image: travel,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
    {
      title: "Healthcare, Pharma and Lifesciences      ",
      image: health,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
    {
      title: "Retail, Consumer Products and Goods",
      image: goods,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
    {
      title: "Telecom and Manufacturing",
      image: telecom,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, adipisci dolorum ipsam itaque dolor provident quisquam minus repellendus alias saepe debitis tempora delectus aut perferendis voluptatibus quibusdam iste consectetur.",
    },
  ]);
  return (
    
      <div className="services__con__main">
        <section className="services__con__section">
          <div className="services__con__container">
            <h1 className="services__con__heading">Key Industries</h1>
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
    
  );
};

export default Industries;

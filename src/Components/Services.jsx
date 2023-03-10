import React from "react";
import "../Styles/Services.css";
import { services } from "../data";

const Services = () => {
  return (
    <section className="services__container">
      <div className="services__sub_container">
        <div className="grid__section">
          {services.map((service, index) => {
            return (
              <div className="services__logo" key={index}>
                <img src={service.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
 
import React from 'react'
import { industries } from '../data';
import '../Styles/Services.css'
const Industries = () => {
  return (
    <section className="services__container">
      <div className="services__sub_container">
        <div className="grid__section">
          {industries.map((industries, index) => {
            return (
              <div className="services__logo" key={index}>
                <img src={industries.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries 
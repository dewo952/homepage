import React from "react";
import AboutsUs from "../Components/AboutsUs";
import HeroBanner from "../Components/HeroBanner";
import Industries from "../Components/Industries";

import ServicesContent from "../Components/ServicesContend";

const Homepage = () => {
  return (
    <>
      <div>
        <HeroBanner />
        <ServicesContent />
        <AboutsUs />
        <Industries />
      </div>
    </>
  );
};

export default Homepage;

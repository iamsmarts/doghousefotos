import React from "react";
import "./Hero.styles.scss";
const Hero = () => {
  return (
    <div className=" row dhf-hero">
      <div className="col photogs-block pb-jorge">
        <h2>Jorge</h2>
        <div className="pb-bkg"></div>
      </div>
      <div className="col photogs-block pb-ed">
        <h2>Ed</h2>
        <div className="pb-bkg"></div>
      </div>
      <div className="col photogs-block pb-kei">
        <h2>Kei</h2>
        <div className="pb-bkg"></div>
      </div>
    </div>
  );
};

export default Hero;

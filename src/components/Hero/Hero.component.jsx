import React, { useContext } from "react";
import Context from "../../Context";
import "./Hero.styles.scss";

const Hero = () => {
  const { state, dispatch } = useContext(Context);
  const handlePhotoAssign = (photog) => {
    console.log(state);
    dispatch({ type: "WHICH_PHOTOG", payload: photog });
  };
  return (
    <div className=" row dhf-hero">
      <div
        className="col photogs-block pb-jorge"
        onClick={() => {
          handlePhotoAssign("jorge");
        }}
      >
        <h2>Jorge</h2>
        <div className="pb-bkg"></div>
      </div>
      <div
        className="col photogs-block pb-ed"
        onClick={() => {
          handlePhotoAssign("ed");
        }}
      >
        <h2>Ed</h2>
        <div className="pb-bkg"></div>
      </div>
      <div
        className="col photogs-block pb-kie"
        onClick={() => {
          handlePhotoAssign("kie");
        }}
      >
        <h2>Kie</h2>
        <div className="pb-bkg"></div>
      </div>
    </div>
  );
};

export default Hero;

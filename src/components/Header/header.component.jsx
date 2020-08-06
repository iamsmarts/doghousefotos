import React from "react";
import GfmBttn from "../gfm-bttn/gfmBttn.component";
import "./header.styles.scss";

const DhfHeader = () => {
  return (
    <header className="row dhf-header">
      <div className="col-md-4 offset-md-4 logo-wrap">
        <img src="./images/logo-png.png" alt="Dog House Fotos Logo Header" />
      </div>
      <GfmBttn />
    </header>
  );
};

export default DhfHeader;

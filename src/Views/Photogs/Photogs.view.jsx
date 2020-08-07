import React, { useContext } from "react";
import Context from "../../Context";
import Photographers from "../../photogs";
import "./Photogs.styles.scss";

const Photogs = ({ name }) => {
  const { state, dispatch } = useContext(Context);
  let pData;
  let pSet = Photographers.map((p, i) => {
    // console.log(p);
    if (p.name === state.whichPhotog) {
      pData = p;
    }
  });
  console.log(pSet);
  let galItems = pData.photos.map((photo, i) => {
    return (
      <div
        className="col-md-4 gallery-img"
        key={i}
        onClick={() => {
          HandleImgClick(`./images/${pData.name}/${photo}`);
        }}
      >
        <img src={`./images/${pData.name}/${photo}`} alt="" />
      </div>
    );
  });
  let Gal = (
    <div className="row justify-content-md-center gallery-wrap">{galItems}</div>
  );
  const HandleNavClick = (to) => {
    dispatch({ type: "WHICH_PHOTOG", payload: to });
  };
  const HandleImgClick = (path) => {
    dispatch({ type: "ACTIVE_PHOTO", payload: path });
  };
  return (
    <div className="row photogs-wrap">
      <div className="row navigation">
        <div
          className="col"
          onClick={() => {
            return HandleNavClick(null);
          }}
        >
          Home
        </div>
        <div
          className="col"
          onClick={() => {
            HandleNavClick("jorge");
          }}
        >
          Jorge
        </div>
        <div
          className="col"
          onClick={() => {
            HandleNavClick("ed");
          }}
        >
          Ed
        </div>
        <div
          className="col"
          onClick={() => {
            HandleNavClick("kie");
          }}
        >
          Kie
        </div>
      </div>
      <div className="w-100"></div>
      <div className="row pdata-wrap">
        <div className="col-md-4 offset-md-1">
          <p className="gal-header">
            <img className="ig-icon" src="./images/ig.png" alt="" />
            <a href={pData.link} target="_blank" rel="noopener noreferrer">
              {pData.igHandle}
            </a>
          </p>
        </div>
      </div>
      {Gal}
    </div>
  );
};

export default Photogs;

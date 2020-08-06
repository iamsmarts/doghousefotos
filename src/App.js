import React from "react";

import DhfHeader from "./components/Header/header.component";
import Hero from "./components/Hero/Hero.component";
import HomeCopy from "./components/HomeCopy/HomeCopy.component";
import GfmBttn from "./components/gfm-bttn/gfmBttn.component";

import "./App.scss";

function App() {
  return (
    <div className="App container-fluid">
      <DhfHeader />
      <Hero />
      <hr />
      <HomeCopy />
      <div className="row bottom-gfm">
        <div className="col-md-4"></div>
        <GfmBttn />
      </div>
      <div className="footer row">
        <div className="col">Dog House Fotos &copy;</div>
        <div className="col iamsmarts">
          Design & Development by <a href="://iamsmarts.com">iamsmarts</a>
        </div>
      </div>
    </div>
  );
}

export default App;

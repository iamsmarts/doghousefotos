import React, { useContext, useReducer } from "react";

import Context from "./Context";
import reducer from "./reducer";

import DhfHeader from "./components/Header/header.component";
import Home from "./Views/Home/Home.view";
import Photogs from "./Views/Photogs/Photogs.view";
import GfmBttn from "./components/gfm-bttn/gfmBttn.component";

import "./App.scss";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  let content;
  if (state.whichPhotog === null) {
    content = <Home />;
  } else {
    content = <Photogs name={state.whichPhotog} />;
  }
  const HandleLbClose = () => {
    dispatch({ type: "ACTIVE_PHOTO", payload: null });
  };
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App container-fluid">
        <DhfHeader />
        {content}
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
        <div className={`light-box ${state.activeImg ? `active` : ``}`}>
          <div className="exit">
            <p className="bebas close-btn" onClick={() => HandleLbClose()}>
              CLOSE [X]
            </p>
          </div>
          <div className="active-img">
            <img src={state.activeImg} alt="" />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

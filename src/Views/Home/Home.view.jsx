import React from "react";
import Hero from "../../components/Hero/Hero.component";
import HomeCopy from "../../components/HomeCopy/HomeCopy.component";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="row justify-content-md-center ig-wrap">
        <div className="col-md-4 align-self-center ig-home">
          <a
            href="https://www.instagram.com/doghousefotos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/ig-big.png" alt="" />
          </a>
        </div>
      </div>
      <hr />
      <HomeCopy />
    </div>
  );
};

export default Home;

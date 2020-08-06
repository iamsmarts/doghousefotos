import React from "react";
import "./HomeCopy.styles.scss";
const HomeCopy = () => {
  return (
    <div className="row home-copy">
      <div className="col">
        <p>
          We would like to introduce ourselves, we are Ed, Jorge, and Kie. We
          are three LA native photographers, inspiring to create a safe space
          for BIPOC by providing a brown owned photo shop in South Central. This
          idea came to us when reminiscing how we wished for a space growing up
          that had workshops and provided a place to be creative. We want to be
          that space for our community.
        </p>
        <p>
          Our goal is to provide services such as film development, scanning,
          printing, photography, and workshops. The workshops are going to be
          free and will be covering how to use cameras, lighting, film, and
          making zines.
        </p>
        <p>
          We appreciate all the encouragement and help you have given us in
          creating this space for our community. Any contributions/donations are
          greatly appreciated.
        </p>
        <p className="sincerely">
          Sincerely,
          <br />
          Kie, Ed, and Jorge
        </p>
      </div>
    </div>
  );
};

export default HomeCopy;

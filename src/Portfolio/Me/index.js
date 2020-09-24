import React from "react";
import "./Me.scss";
import Shoe from "./Shoe";
import Leg from "./Leg";
import RightArm from "./Arms/RightArm";
import LeftArm from "./Arms/LeftArm";
import Head from "./Head";
import BackGround from "./BackGround";
import Wood from "./Wood";

const Me = ({ className }) => {
  return (
    <div className={`me-container ${className}`}>
      <BackGround />
      <Wood />
      <div className="me">
        <Head />
        <div className="body">
          <div className="shirt" />
          <RightArm />
          <LeftArm />
          <div className="hat" />
        </div>
        <div className="legs">
          <Leg className="leg-left" />
          <Leg className="leg-right" />
        </div>
        <div className="shoes">
          <Shoe className="shoe-left" />
          <Shoe className="shoe-right" />
        </div>
      </div>
    </div>
  );
};

export default Me;

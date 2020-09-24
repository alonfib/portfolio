import React from "react";
import "./BackGround.scss";
import Lines from "./Lines/Index";
import Clouds from "./Clouds";

const BackGround = () => {
  return (
    <div className="background">
      <div className="lake"></div>
      <Clouds />
      <div className="bg-1">
        <div className="mountain-2">
          <div className="mountain"></div>
        </div>
        <div className="mountain-1">
          <div className="top"></div>
          <div className="green">
            <div className="green-1"></div>
            <div className="green-2"></div>
            <div className="green-3"></div>
            <div className="green-4"></div>
          </div>
        </div>
      </div>
      <div className="bg-2">
        <Lines />

        <div className="mt-1"></div>
        <div className="mt-2">
          <div className="mt-2--small-mt"></div>
        </div>
        <div className="mt-3"></div>
      </div>
      <div className="bg-3">
        <div className="mt-1"></div>
        <div className="mt-2"></div>
      </div>
    </div>
  );
};
export default BackGround;

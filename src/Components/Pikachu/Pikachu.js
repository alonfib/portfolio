import React from "react";
import "./Pikachu.scss";

const Pikachu = () => {
  return (
    <div className="pikachu">
      <div className="ears">
        <div className="left" />
        <div className="right" />
      </div>
      <div className="face">
        <div className="eyes" id="eyes">
          <div className="left">
            <div className="eye" id="eye-left">
              <div className="pupil" id="left-pupil" />
            </div>
          </div>
          <div className="right">
            <div className="eye" id="eye-right">
              <div className="pupil" id="right-pupil" />
            </div>
          </div>
        </div>
        <div className="nose" />
        <div className="mouth" />
        <div className="chicks">
          <div className="left" />
          <div className="right" />
        </div>
      </div>
      <div className="body">
        <div className="arms">
          <div className="left" />
          <div className="right" />
        </div>
      </div>
      <div className="tail">
        <div className="tail-1"></div>
        <div className="tail-2"></div>
        <div className="tail-3"></div>
        <div className="tail-end"></div>
      </div>
      <div className="legs">
        <div className="left" />
        <div className="right" />
      </div>
    </div>
  );
};

export default Pikachu;

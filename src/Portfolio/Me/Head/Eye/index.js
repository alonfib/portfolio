import React from "react";
import "./Eye.scss";

const Eye = ({ className }) => {
  return (
    <div className={`eye-container ${className}`}>
      <div className="eye-brow"></div>
      <div className="eye">
        <div className="pupil" />
      </div>
    </div>
  );
};

export default Eye;

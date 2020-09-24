import React from "react";
import "./Leg.scss";

const Leg = ({ className }) => {
  return (
    <div className={`leg ${className}`}>
      <div className="leg-1"></div>
      <div className="leg-2"></div>
      <div className="leg-3"></div>
    </div>
  );
};

export default Leg;

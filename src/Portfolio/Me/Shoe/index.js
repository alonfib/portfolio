import React from "react";
import "./Shoe.scss";

const Shoe = ({ className }) => {
  return (
    <div className={`shoe ${className}`}>
      <div className="bottom">
        <div className="bottom-1"></div>
        <div className="bottom-2"></div>
      </div>
      <div className="top">
        <div className="top-1"></div>
        <div className="top-2"></div>
        <div className="top-3"></div>
        <div className="top-4"></div>
      </div>
      <div className="line">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default Shoe;

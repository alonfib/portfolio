import React from "react";
import "./Head.scss";
import Eye from "./Eye";
import Hair from "./Hair";
import Beard from "./Beard";
import Mouth from "./Mouth";
import Nose from "./Nose";

const Head = () => {
  return (
    <div className="head">
      <Hair />
      <div className="eyes">
        <Eye className="eye-right" />
        <Eye className="eye-left" />
      </div>
      <Nose />
      <Beard />
      <Mouth />
    </div>
  );
};

export default Head;

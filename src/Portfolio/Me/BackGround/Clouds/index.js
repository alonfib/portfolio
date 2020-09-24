import React from "react";
import "./Clounds.scss";
import cloud1 from "./images/cloud1.png";
import cloud2 from "./images/cloud2.png";
import cloud3 from "./images/cloud3.png";
import cloud4 from "./images/cloud4.png";
import cloud5 from "./images/cloud5.png";

const Clouds = () => {
  return (
    <div className="clouds">
      <img src={cloud1} className={"cloud cloud-1"} />
      <img src={cloud2} className={"cloud cloud-2"} />
      <img src={cloud3} className={"cloud cloud-3"} />
      <img src={cloud4} className={"cloud cloud-4"} />
      <img src={cloud5} className={"cloud cloud-5"} />
      {/* <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
      <div className="cloud cloud-4" />
      <div className="cloud cloud-5" /> */}
    </div>
  );
};

export default Clouds;

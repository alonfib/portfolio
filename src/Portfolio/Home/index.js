import React from "react";
import "./Home.scss";
import Me from "../Me";

const Home = () => {
  return (
    <div className="home" id="home">
      <span className="images-flip">
        <div className="img1" />
        <Me className={"img2"} />
      </span>
      <div className="intro">
        <label>ALON FIBERT</label>
        <label>WEB DEVELOPER</label>
      </div>
      <div className="links">
        <a id="linkedin" href="https://www.linkedin.com/in/alon-fibert"></a>
        <a id="github" href="https://github.com/alonfib"></a>
      </div>
    </div>
  );
};

export default Home;

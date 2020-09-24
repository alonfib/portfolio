import React from "react";
import "./Portfolio.scss";
import Home from "./Home";
import Tabs from "./Tabs";
import About from "./About";
const Protfolio = ({}) => {
  return (
    <div className="portfolio">
      <Tabs />
      <Home />
      <About />
    </div>
  );
};

export default Protfolio;

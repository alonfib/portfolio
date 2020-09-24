import React, { useState } from "react";
import "./Tabs.scss";

const Tabs = () => {
  const [isExtended, setIsExtended] = useState(false);

  const onScroll = () => {
    if (window.top.scrollY === 0 && isExtended === true) {
      setIsExtended(false);
      return;
    }
    if (isExtended === true) {
      return;
    }
    setIsExtended(true);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div className="tabs" data-isExtended={isExtended}>
      <label className="name">Alon Fibert</label>
      <div className="buttons">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Tabs;

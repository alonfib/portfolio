import React from "react";
import "./About.scss";
import ReactImg from "./../../images/react.png";
import SassImg from "./../../images/sass.png";
import Js from "./../../images/JsShield.png";
import Redux from "./../../images/redux.png";
import Css from "./../../images/CssShield.png";
import Html from "./../../images/HtmlShield.png";
import Node from "./../../images/nodeJs.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="me">
        <h1 className="title">Who Am I?</h1>
        <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
          Hey, My name is Alon and I'm a 23 years old web developer. Discharged
          from the army (Unit 8200) on July 30th, 2020. At the past 3 years I
          was web developing for the army.
        </p>
        <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
          My general job was full-stack developing, But my preference is FE
          developing - especially styling.
        </p>
        <h1>So... What Do I Know?</h1>
        <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
          My main preoccupations in web developing are with HTML, Css,
          JavaScript, React, Redux, Scss, Styled Components and NodeJs.
        </p>
        <div className="icons">
          <img id="html" src={Html} />
          <img id="js" src={Js} />
          <img id="css" src={Css} />
          <img id="react" src={ReactImg} />
          <img id="redux" src={Redux} />
          <img id="sass" src={SassImg} />
          <img id="node" src={Node} />
        </div>
      </div>
      <div className="skils"></div>
    </div>
  );
};

export default About;

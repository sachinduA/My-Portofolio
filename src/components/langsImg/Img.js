import React from "react";

import reactjs from "../../images/reactjs.png";
import nodejs from "../../images/nodejs.png";
import nextjs from "../../images/nextjs.png";
import java from "../../images/java.png";
import "./Img.css";

const Img = () => {
  return (
    <div className="container">
      <h3 className="l-subtitle">Frameworks & Languages</h3>
      <div className="e-logos">
        <img src={reactjs} alt="" className="e-icons" />
        <img src={nextjs} alt="" className="e-icons" />
        <img src={nodejs} alt="" className="e-icons" />
        <img src={java} alt="" className="e-icons" />
      </div>
    </div>
  );
};

export default Img;

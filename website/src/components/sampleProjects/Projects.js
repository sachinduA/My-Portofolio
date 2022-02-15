import React from "react";

import "./Projects.css";
import devoloper from "../../images/programing.png";

const Projects = () => {
  return (
    <div className="container">
      <h3 className="p-subtitle">Projects</h3>
      <h1 className="p-title">GitHub Feed</h1>
      <div className="p-container">
        <div className="p-left">
          <img src={devoloper} alt="" className="p-img" />
        </div>
        <div className="p-right">right</div>
      </div>
    </div>
  );
};

export default Projects;

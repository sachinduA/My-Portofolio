import React from "react";

import "./Intro.css";
import man from "../../images/man.png";

const Intro = () => {
  return (
    <div className="intro-div">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello, My name is</h2>
          <h1 className="intro-name">Sachindu Ayodye</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Devoloper</div>
              <div className="intro-title-item">Software Engineer</div>
              <div className="intro-title-item">Tech Enthusiast</div>
            </div>
          </div>

          <p className="intro-desc">
            I am a software developer. I make all the websites and other
            software that you and your business need, and my goal is to provide
            software with the exact features and user experience that can match
            your expectations.
          </p>

          <div className="intro-cv">
            <a
              className="btn btn-success"
              href="https://drive.google.com/drive/folders/15QOpOtNqDCsXWR_GOQU2uoSnPEe11g4I?usp=sharing"
            >
              Get CV
            </a>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={man} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;

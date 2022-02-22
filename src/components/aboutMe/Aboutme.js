import React from "react";
import "./Aboutme.css";

import devoloper from "../../images/Sdeveloper.png";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mail.png";

const About = () => {
  return (
    <div className="container">
      <div className="a">
        <div className="a-left">
          <div className="a-card">
            <img src={devoloper} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About me</h1>
          <p className="a-desc">
            I am Information Technology Professional who has experience in
            software development with a demonstrated history of working in the
            computer software industry, skilled in Software Development and Web
            app development. I am a highly motivated and hardworking individual
            and also interested to meet other professionals and share my
            knowledge, so feel free to connect!
          </p>
          <div className="intro-social">
            <a href="https://github.com/sachinduA">
              <img src={github} alt="" className="intro-socialIcons" />
            </a>
            <a href="https://www.linkedin.com/in/sachindu-peramuna-924380148/">
              <img src={linkedin} alt="" className="intro-socialIcons" />
            </a>
            <a href="https://www.facebook.com/sachindu.ayodye.9">
              <img src={facebook} alt="" className="intro-socialIcons" />
            </a>
            <a href="mailto:sachinduayodye@gmail.com">
              <img src={mail} alt="" className="intro-socialIcons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

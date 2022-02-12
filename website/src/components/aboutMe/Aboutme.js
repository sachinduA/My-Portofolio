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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec bibendum augue. Fusce hendrerit maximus feugiat. Donec at nisi
            pharetra, feugiat velit non, feugiat lectus. Ut ac blandit lorem.
            Duis id libero felis. Suspendisse potenti. Praesent purus nisi,
            aliquam at diam at, bibendum lobortis arcu. Suspendisse eros quam,
            varius a tincidunt sed, vestibulum quis risus. Suspendisse fringilla
            eget diam id interdum. Donec eget tincidunt massa.
          </p>
          <div className="intro-social">
            <img src={github} alt="" className="intro-socialIcons" />
            <img src={linkedin} alt="" className="intro-socialIcons" />
            <img src={facebook} alt="" className="intro-socialIcons" />
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

import React from "react";

import "./Experts.css";
import TimeLine from "../timeLine/TimeLine";
import Offer from "../offerItem/Offer";

import reactjs from "../../images/reactjs.png";
import nodejs from "../../images/nodejs.png";
import nextjs from "../../images/nextjs.png";
import java from "../../images/java.png";
import devoloper from "../../images/developer.png";

const Experts = () => {
  return (
    <div className="container">
      <div className="e">
        <div className="e-left">
          <h3 className="e-title">My Areas</h3>
          <div className="e-offers">
            <div className="offer-left">
              <img src={devoloper} alt="" className="offer-img" />
            </div>

            <div className="offer-right">
              <Offer />
              <div className="e-logos">
                <img src={reactjs} alt="" className="e-icons" />
                <img src={nextjs} alt="" className="e-icons" />
                <img src={nodejs} alt="" className="e-icons" />
                <img src={java} alt="" className="e-icons" />
              </div>
            </div>
          </div>
        </div>
        <div className="e-right">
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default Experts;

import React from "react";

import "./Experts.css";
import TimeLine from "../timeLine/TimeLine";
import Offer from "../offerItem/Offer";

import working from "../../images/working.png";

const Experts = () => {
  return (
    <div className="container">
      <div className="e">
        <div className="e-left">
          <h3 className="e-title">What I Offer</h3>
          <div className="e-offers">
            <div className="offer-left">
              <img src={working} alt="" className="offer-img" />
            </div>

            <div className="offer-right">
              <Offer />
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

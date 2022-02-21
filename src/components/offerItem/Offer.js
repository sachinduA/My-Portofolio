import React from "react";

import "./Offer.css";
import offerdata from "../../offerData";
import OfferItem from "../offerItem/OfferItem";

const Offer = () => {
  return (
    offerdata.length > 0 && (
      <div className="offer-container">
        {offerdata.map((odata, idx) => {
          return <OfferItem data={odata} key={idx} />;
        })}
      </div>
    )
  );
};

export default Offer;

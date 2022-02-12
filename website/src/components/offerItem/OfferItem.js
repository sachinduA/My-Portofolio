import React from "react";

import "./Offer.css";

export default function OfferItem({ data }) {
  return (
    <div className="offer-item">
      <div className="offer-content">
        <h5 className="offer-title">{data.title}</h5>
        <p className="offer-description">{data.discription}</p>
      </div>
    </div>
  );
}

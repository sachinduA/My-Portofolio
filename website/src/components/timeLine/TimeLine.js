import React from "react";

import timelinedata from "../../data";
import TimeLineItem from "../timeLine/TimeLineItem";
import "./TimeLine.css";

const TimeLine = () =>
  timelinedata.length > 0 && (
    <div className="tLine">
      <h3>My Journey</h3>
      <div className="t-container">
        {timelinedata.map((data, idx) => (
          <TimeLineItem data={data} key={idx} />
        ))}
      </div>
    </div>
  );
export default TimeLine;

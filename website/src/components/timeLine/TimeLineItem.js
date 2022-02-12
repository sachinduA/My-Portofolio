import React from "react";

const TimeLineItem = ({ data }) => {
  return (
    <div className="t-item">
      <div className="t-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.title}</p>
        <span className="discription">{data.discription}</span>
        <span className="circle"></span>
      </div>
    </div>
  );
};
export default TimeLineItem;

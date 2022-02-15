import React from "react";

import "./ProjectsCard.css";

export default function ProjectCard({ data }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5>{data.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{data.discription}</p>
      </div>
      <div className="card-footer">
        <a href={data.link} className="btn btn-success">
          View Repository
        </a>
      </div>
    </div>
  );
}

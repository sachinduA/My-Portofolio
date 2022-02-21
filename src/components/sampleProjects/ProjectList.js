import React from "react";

import ProjectCard from "../sampleProjects/ProjectsCard";
import Projectsdata from "../../projectsData";

const ProjectList = () => {
  return (
    Projectsdata.length > 0 && (
      <div className="offer-container">
        {Projectsdata.map((pdata, idx) => {
          return <ProjectCard data={pdata} key={idx} />;
        })}
      </div>
    )
  );
};

export default ProjectList;

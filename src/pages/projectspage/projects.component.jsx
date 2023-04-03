import React from "react";

import ProjectsList from "../../components/projects-list/projects-list.component";
import GeneralpageHeaderComponent from "../../components/page-general-header/generalpageHeader.component";

const Projects = () => (
  <div>
    <GeneralpageHeaderComponent
      text={"PROJECTS I have worked on..."}
      color={"rebeccapurple"}
    />
    <ProjectsList />
  </div>
);

export default Projects;

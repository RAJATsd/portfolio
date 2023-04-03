import React from "react";
import GeneralpageHeaderComponent from "../../components/page-general-header/generalpageHeader.component";
import ExperienceListComponent from "../../components/experience-list/experience-list.component";

const ExperiencePageComponent = () => {
  return (
    <div>
      <GeneralpageHeaderComponent
        text="My professional experience ..."
        color="rgb(72, 52, 126)"
      />
      <ExperienceListComponent />
    </div>
  );
};

export default ExperiencePageComponent;

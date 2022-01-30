import "./experience-list.styles.css";
import React from "react";
import ExperienceCardComponent from "../experience-card/experience-card.component";
import { experienceList } from "./experienceList";

const ExperienceListComponent = () => {
  return (
    <div className="experience-list-container">
      <div className="experience-list">
        {experienceList.map((singleExp) => (
          <ExperienceCardComponent
            experienceDetails={singleExp}
            key={singleExp.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceListComponent;

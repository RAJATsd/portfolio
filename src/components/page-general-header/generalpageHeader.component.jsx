import './generalpageHeader.styles.css';
import React from "react";

const GeneralpageHeaderComponent = ({ color, text }) => {
  return (
    <div className="projects-overview-container" style={{backgroundColor:color}}>
      <div className="projects-overview-container__heading">
        <h1>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default GeneralpageHeaderComponent;

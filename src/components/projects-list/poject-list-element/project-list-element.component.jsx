import React from "react";
import hoverHandImage from '../../../assets/hover-icon.jpg';

import "./project-list-element.syles.css";

const ProjectListElement = ({
  project: { name, about, site, role, implementations, image },
}) => (
  <div className="project-list-element">
    <div className="front-body" style={{ backgroundImage: `url(${image})` }}>
      <img src={hoverHandImage} alt="hover-on-this" className="hover-hand" />
      <div className="project-name-holder">{name}</div>
    </div>
    <div className="back-body">
      <img src={image} alt="project" className="project-image" />
      <h3 className="project-name">{name}</h3>
      <a className="project-link" href={site}>
        {site}
      </a>
      <span className="about-project">{about}</span>
      <span className="position">{role}</span>
      <div className="implementations-holder">
        <ul>
          {implementations.map((imp) => (
            <li className="list-element" key={imp}>{imp}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ProjectListElement;

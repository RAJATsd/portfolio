import React from "react";
import { Link } from "react-router-dom";

import "./skill-tile.styles.css";

const SkillTile = ({ icon, num, event, redirectionLink }) => (
  <Link
    to={redirectionLink}
    style={{ textDecoration: "none", color: "inherit", background: "inherit" }}
  >
    <div className="skills-about-myself_tile">
      <div className="skills-about-myself_tile__item">{icon}</div>
      <h1 className="skills-about-myself_tile__item">{num}</h1>
      <h3 className="skills-about-myself_tile__item item-name">{event}</h3>
    </div>
  </Link>
);

export default SkillTile;

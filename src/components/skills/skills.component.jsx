import React from "react";
import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import WebRoundedIcon from "@material-ui/icons/WebRounded";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import nodeImage from "../../assets/node.png";
import reactImage from "../../assets/react.png";
import mongoImage from "../../assets/mongo.png";
import mysqlImage from "../../assets/mysql.png";

import SkillRating from "./skill-ratings/skill-rating.component";
import SkillTile from "./skill-tile/still-tile.component";
import "./skills.styles.css";

const Skills = () => (
  <div className="skills">
    <div className="skills-about-myself">
      <h1>ABOUT MYSELF</h1>
      <div className="skills-about-myself_content">
        I am a 4th year student of batch 17-21.
        <br />
        Throughout my college life I have been <br />
        doing projects in Node as a REST API developer.
        <br />I am just starting in React.js
      </div>
      <div className="skills-about-myself_tiles">
        <SkillTile
          icon={<FileCopyRoundedIcon />}
          num={5}
          event={"Projects"}
          redirectionLink="/projects"
        />
        <SkillTile icon={<WebRoundedIcon />} num={4} event={"Hackathons"} />
        <SkillTile
          icon={<WorkOutlineRoundedIcon />}
          num={2}
          event={"Internships"}
          redirectionLink="/experience"
        />
      </div>
    </div>
    <div className="skills-ratings">
      <SkillRating skillName="Node" icon={nodeImage} />
      <SkillRating skillName="MongoDB" icon={mongoImage} />
      <SkillRating skillName="SQL" icon={mysqlImage} />
      <SkillRating skillName="React" icon={reactImage} />
    </div>
  </div>
);

export default Skills;

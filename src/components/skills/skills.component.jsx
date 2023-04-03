import React from "react";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import nodeImage from "../../assets/node.png";
import reactImage from "../../assets/react.png";
import mongoImage from "../../assets/mongo.png";
import mysqlImage from "../../assets/mysql.png";

import SkillRating from "./skill-ratings/skill-rating.component";
import SkillTile from "./skill-tile/still-tile.component";
import "./skills.styles.css";
import { Container, Grid } from "@mui/material";

const Skills = () => (
  <Container>
    <Grid container alignItems="center" justifyContent="space-between">
      <div>
        <h1>ABOUT MYSELF</h1>
        <div className="skills-about-myself_content">
          I am a 4th year student of batch 17-21.
          <br />
          Throughout my college life I have been <br />
          doing projects in Node as a REST API developer.
          <br />I am just starting in React.js
        </div>
        <Grid item container justifyContent="space-between">
          <SkillTile
            icon={<FileCopyRoundedIcon />}
            num={5}
            event={"Projects"}
            redirectionLink="/projects"
          />
          <SkillTile icon={<WebRoundedIcon />} num={4} event={"Hackathons"} redirectionLink="/" />
          <SkillTile
            icon={<WorkOutlineRoundedIcon />}
            num={2}
            event={"Internships"}
            redirectionLink="/experience"
          />
        </Grid>
      </div>
      <div>
        <SkillRating skillName="Node" icon={nodeImage} />
        <SkillRating skillName="MongoDB" icon={mongoImage} />
        <SkillRating skillName="SQL" icon={mysqlImage} />
        <SkillRating skillName="React" icon={reactImage} />
      </div>
    </Grid>
  </Container>
);

export default Skills;

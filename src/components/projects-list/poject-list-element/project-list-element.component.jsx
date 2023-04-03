import { Grid, Typography } from "@mui/material";
import React from "react";
import hoverHandImage from "../../../assets/hover-icon.jpg";

import "./project-list-element.syles.css";

const ProjectListElement = ({
  project: { name, about, site, role, implementations, image },
}) => (
  <Grid
    item
    width="47%"
    height={600}
    bgcolor="GrayText"
    className="project-list-element"
    position="relative"
    borderRadius={4}
    overflow="hidden"
  >
    <Grid
      item
      container
      py={2}
      position="relative"
      borderRadius={4}
      justifyContent="center"
      alignItems="center"
      style={{ backgroundImage: `url(${image})` }}
      className="front-body"
      height="100%"
    >
      <img src={hoverHandImage} alt="hover-on-this" className="hover-hand" />
      <Typography
        variant="h3"
        borderRadius={4}
        p={2}
        fontWeight="bold"
        textAlign="center"
        color="white"
        border="0.5rem solid rgba(255, 255, 255, 0.876)"
        bgcolor="rebeccapurple"
      >
        {name}
      </Typography>
    </Grid>
    <Grid
      item
      container
      className="back-body"
      position="absolute"
      top="50%"
      left="50%"
      width="93%"
      height="93%"
      borderRadius={4}
      p={2}
      flexDirection="column"
      alignItems="center"
    >
      <img src={image} alt="project" className="project-image" />
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Times New Roman, Times, serif"
        mt={3}
      >
        {name}
      </Typography>
      <a className="project-link" href={site}>
        {site}
      </a>
      <Typography textAlign="center" mt={1}>
        {about}
      </Typography>
      <Typography textAlign="center" mt={4}>
        {role}
      </Typography>
      <div style={{ marginTop: "1rem" }}>
        <ul>
          {implementations.map((imp) => (
            <li className="list-element" key={imp}>
              {imp}
            </li>
          ))}
        </ul>
      </div>
    </Grid>
  </Grid>
);

export default ProjectListElement;

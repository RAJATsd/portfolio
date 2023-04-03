import React from "react";
import { projectInformation } from "./projectInformation";
import ProjectListElement from "./poject-list-element/project-list-element.component";
import { Container, Grid } from "@mui/material";

const ProjectsList = () => {
  return (
    <Container>
      <Grid container mt={22} mb={16} justifyContent="space-between" rowGap={8}>
        {projectInformation.map((ele) => (
          <ProjectListElement key={ele.id} project={ele} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsList;

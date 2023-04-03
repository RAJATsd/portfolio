import React from "react";
import ExperienceCardComponent from "../experience-card/experience-card.component";
import { experienceList } from "./experienceList";
import { Box, Container, Grid } from "@mui/material";

const ExperienceListComponent = () => {
  return (
    <Box my={25}>
      <Container>
        <Grid item container rowGap={2}>
          {experienceList.map((singleExp) => (
            <ExperienceCardComponent
              experienceDetails={singleExp}
              key={singleExp.id}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceListComponent;

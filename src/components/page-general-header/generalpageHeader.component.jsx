import React from "react";
import { Container, Grid } from "@mui/material";

const GeneralpageHeaderComponent = ({ color, text }) => {
  return (
    <Grid
      container
      bgcolor={color || "rebeccapurple"}
      position="relative"
      justifyContent="center"
    >
      <Container>
        <Grid
          item
          container
          height={300}
          justifyContent="center"
          alignItems="center"
          borderRadius={2}
          top={150}
          position="relative"
          bgcolor="white"
        >
          <h1>{text}</h1>
        </Grid>
      </Container>
    </Grid>
  );
};

export default GeneralpageHeaderComponent;

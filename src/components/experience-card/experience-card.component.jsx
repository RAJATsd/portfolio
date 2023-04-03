import "./experience-card.styles.css";
import React from "react";
import hoverHand from "../../assets/hover-icon.jpg";
import { Box, Grid, Typography } from "@mui/material";

const ExperienceCardComponent = ({ experienceDetails }) => {
  const calculateDuration = () => {
    const endingYear = experienceDetails.isCurrentCompany
      ? new Date().getFullYear()
      : experienceDetails.leavingYear;
    const endingMonth = experienceDetails.isCurrentCompany
      ? new Date().getMonth() + 1
      : experienceDetails.leavingMonth;
    const startingYear = experienceDetails.joiningYear;
    const startingMonth = experienceDetails.joiningMonth;

    let noOfMonthsFromYears = (endingYear - startingYear) * 12;
    if (endingMonth < startingMonth) {
      noOfMonthsFromYears -= 12;
    }

    const noOfMonthsFromMonthsCalc =
      endingMonth >= startingMonth
        ? endingMonth - startingMonth + 1
        : 13 + endingMonth - startingMonth;

    const totalNoOfMonths = noOfMonthsFromYears + noOfMonthsFromMonthsCalc;
    return [totalNoOfMonths % 12, Math.floor(totalNoOfMonths / 12)];
  };

  const [months, years] = calculateDuration();

  return (
    <Grid
      container
      bgcolor="#252831"
      borderRadius={0.5}
      height="18rem"
      position="relative"
      overflow="hidden"
      className="experience-card-container"
    >
      <img src={hoverHand} alt="hover" className="hover-hand" />
      <Box display="flex" width="100%" color="white">
        <Grid
          item
          container
          width={300}
          flexShrink={0}
          bgcolor="rgb(72, 52, 126)"
          borderRadius="0 100vh 100vh 0"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={experienceDetails.companyImage}
            alt="company-pic"
            className="experience-company-image"
          />
        </Grid>
        <Box width="100%" px={4} py={2}>
          <div>
            <Typography variant="h4" color="rgb(139, 101, 245)" mb={0.5}>
              {experienceDetails.companyName}
            </Typography>
            <Typography color="white">
              {experienceDetails.profileName}
            </Typography>
          </div>
          <Grid item container mt={4} mb={1} columnGap={2}>
            <span>
              {experienceDetails.joiningMonth}/{experienceDetails.joiningYear}
            </span>
            -
            {experienceDetails.isCurrentCompany ? (
              <span>present</span>
            ) : (
              <span>
                {experienceDetails.leavingMonth}/{experienceDetails.leavingYear}
              </span>
            )}
          </Grid>
          <div>
            Duration : {years} years {months} months
          </div>
          <Grid item container mt={4} columnGap={1} rowGap={1}>
            {experienceDetails.technologiesUsed.map((singleTech) => (
              <Box
                key={singleTech}
                px={2}
                py={1}
                bgcolor="white"
                borderRadius="100vh"
                color="black"
              >
                {singleTech}
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        position="absolute"
        top={0}
        p={1}
        bgcolor="azure"
        className="roles-responsibilies-container"
        width="100%"
        height="100%"
      >
        <Typography
          variant="h5"
          position="relative"
          mb={0.8}
          className="roles-and-resp-heading"
        >
          Roles And Responsibilies{" "}
          <a href={experienceDetails.websiteLink}>(Go To Website)</a>
        </Typography>
        <Box p={2} pl={0}>
          <ul>
            {experienceDetails.rolesAndReponsibilities.map((singleRAndR) => (
              <li key={singleRAndR}>{singleRAndR}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Grid>
  );
};

export default ExperienceCardComponent;

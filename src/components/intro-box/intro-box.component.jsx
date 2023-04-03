import React from "react";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import "./intro-box.styles.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";

import ImageFile from "../../assets/profile_image.jpeg";
import { Container, Grid } from "@mui/material";

const IntroBox = () => (
  <div className="intro-box">
    <Container>
      <Grid
        container
        borderRadius={4}
        alignItems="center"
        position="relative"
        top={200}
        bgcolor="white"
      >
        <Grid item p={5}>
          <img src={ImageFile} alt="Profile" className="profile_image" />
        </Grid>
        <Grid item p={5}>
          <Grid item my={4}>
            <h5>HELLO EVERYBODY, I AM</h5>
            <h1>RAJAT SHARMA</h1>
            <h5>Junior MERN Stack Developer</h5>
          </Grid>
          <Grid item my={4}>
            <Grid item container alignItems="center" columnGap={1}>
              <CakeRoundedIcon />
              <h5>14th Decemeber,1998</h5>
            </Grid>
            <Grid item container alignItems="center" columnGap={1}>
              <CallRoundedIcon />
              <h5>+91 8708690173</h5>
            </Grid>
            <Grid item container alignItems="center" columnGap={1}>
              <MailOutlineRoundedIcon />
              <h5>rajatsharmaatri@gmail.com</h5>
            </Grid>
          </Grid>
          <Grid item container columnGap={2}>
            <a
              href="https://www.linkedin.com/in/rajat-sharma-06ba9a141/"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-box-container__text_sites__site"
            >
              <LinkedIn className="intro-box-container__text_sites__site_icon" />
            </a>
            <a
              href="https://github.com/RAJATsd"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-box-container__text_sites__site"
            >
              <GitHub className="intro-box-container__text_sites__site_icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100003168924278"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-box-container__text_sites__site"
            >
              <Facebook className="intro-box-container__text_sites__site_icon" />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default IntroBox;

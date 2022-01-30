import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./header.styles.css";

const useStyles = makeStyles({
  headerButton: {
    margin: "0 15px",
    padding: "24px 0",
    minWidth: "unset",
  },
  headerButtonFixed: {
    margin: "0 15px",
    padding: "10px 0",
    minWidth: "unset",
  },
});

const Header = () => {
  const classes = useStyles();
  const [headerClass, setHeaderClass] = useState("main-header");
  const headerClassRef = useRef({});
  headerClassRef.current = headerClass;

  const listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      if (headerClassRef.current !== "main-header-fixed") {
        setHeaderClass("main-header-fixed");
      }
    } else {
      if (headerClassRef.current !== "main-header") {
        setHeaderClass("main-header");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [headerClass]);

  return (
    <div className={headerClass}>
      <nav className="main-header-nav">
        <div className="main-header-nav__logo">
          <Link to="/">
            <h3>Rajat</h3>
          </Link>
        </div>
        <div className="main-header-nav__buttons">
          <Link className="header-nav-anchors" to="/">
            <Button
              className={`main-header-nav_button ${
                headerClassRef.current === "main-header"
                  ? classes.headerButton
                  : classes.headerButtonFixed
              }`}
            >
              Home
            </Button>
          </Link>
          <Link className="header-nav-anchors" to="/projects">
            <Button
              className={`main-header-nav_button ${
                headerClassRef.current === "main-header"
                  ? classes.headerButton
                  : classes.headerButtonFixed
              }`}
            >
              Projects
            </Button>
          </Link>
          <Link className="header-nav-anchors" to="/experience">
            <Button
              className={`main-header-nav_button ${
                headerClassRef.current === "main-header"
                  ? classes.headerButton
                  : classes.headerButtonFixed
              }`}
            >
              Experience
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

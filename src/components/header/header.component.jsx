import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "./header.styles.css";
import { Container } from "@mui/material";

const headerButton = {
  margin: "0 15px",
  padding: "24px 0",
  minWidth: "unset",
};

const headerButtonFixed = {
  margin: "0 15px",
  padding: "10px 0",
  minWidth: "unset",
};

const Header = () => {
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
      <Container>
        <nav className="main-header-nav">
          <div className="main-header-nav__logo">
            <Link to="/">
              <h3>Rajat</h3>
            </Link>
          </div>
          <div className="main-header-nav__buttons">
            <Link className="header-nav-anchors" to="/">
              <Button
                className={`main-header-nav_button`}
                style={
                  headerClassRef.current === "main-header"
                    ? headerButton
                    : headerButtonFixed
                }
              >
                Home
              </Button>
            </Link>
            <Link className="header-nav-anchors" to="/projects">
              <Button
                className={`main-header-nav_button`}
                style={
                  headerClassRef.current === "main-header"
                    ? headerButton
                    : headerButtonFixed
                }
              >
                Projects
              </Button>
            </Link>
            <Link className="header-nav-anchors" to="/experience">
              <Button
                className={`main-header-nav_button`}
                style={
                  headerClassRef.current === "main-header"
                    ? headerButton
                    : headerButtonFixed
                }
              >
                Experience
              </Button>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;

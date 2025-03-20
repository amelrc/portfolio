import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../images/Logo.svg";
import ResizableWord from "./ResizableWord";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 70% 1fr;
  justify-items: center;
  padding: 16px 0;
  align-items: center;
  width: 100%;
`;

const NavTop = ({ style }) => {
  return (
    <Nav style={style}>
      <ResizableWord
        style={{ display: "grid", justifyItems: "end" }}
        href="/"
        hash="#work"
        navitem={"work"}
      />
      <Link to="/" style={{ gridColumnStart: 2 }}>
        <img src={Logo} alt="Amel Caballero Design Logo" />
      </Link>
      <ResizableWord
        style={{ display: "grid", justifyItems: "start" }}
        href="/"
        hash="#services"
        navitem={"services"}
      />
    </Nav>
  );
};

const NavBot = ({ style }) => {
  return (
    <Nav style={style}>
      <ResizableWord
        style={{ display: "grid", justifyItems: "end" }}
        href="/"
        hash="#about"
        navitem={"about"}
      />
      <ResizableWord
        style={{ gridColumn: 3, display: "grid", justifyItems: "start" }}
        href="/"
        hash="#contact"
        navitem={"contact"}
      />
    </Nav>
  );
};

export { NavBot, NavTop };

import Logo from "../images/Logo.svg";
import ResizableWord from "./ResizableWord";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 70% 1fr;
  justify-items: center;
  padding: 16px 0;
  align-items: center;
  width: 100%;
  opacity: 0;
  animation: ${fadeInAnimation} 2s ease-in-out forwards;
  animation-delay: 2s;
`;

const NavTop = ({ style }) => {
  return (
    <Nav style={style}>
      <ResizableWord
        style={{ display: "grid", justifyItems: "end" }}
        href="#work"
        navitem={"work"}
      />
      <Link to="/" style={{gridColumnStart: 2}}>
        <img src={Logo} alt="Amel Caballero Design Logo" />
      </Link>
      <ResizableWord
        style={{ display: "grid", justifyItems: "start" }}
        href="#services"
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
        href="#about"
        navitem={"about"}
      />
      <ResizableWord
        style={{ gridColumn: 3, display: "grid", justifyItems: "start" }}
        href="#contact"
        navitem={"contact"}
      />
    </Nav>
  );
};

export { NavBot, NavTop };

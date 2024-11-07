import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import device from "../../generalStyles";

const AppCursor = styled.div`
  z-index: 1000;
  border-radius: 50%;
  border: 1px solid #bd00ff;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  mix-blend-mode: ${({ isActive }) => (isActive ? "normal" : "difference")};
  width: ${({ isActive }) => (isActive ? "16px" : "64px")};
  height: ${({ isActive }) => (isActive ? "16px" : "64px")};
  transition: ${({ isActive }) =>
    isActive ? "height 0.1s, width 0.1s" : "none"};
  background-color: ${({ isActive }) => (isActive ? "#bd00ff" : "white")};
  display: none;
  @media ${device.tablet} {
    display: initial;
  }
`;

const CustomCursor = () => {
  const ref = useRef();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => {
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const throttle = (fn, delay) => {
      let lastTime = 0;
      return function (...args) {
        const currentTime = new Date().getTime();
        if (currentTime - lastTime >= delay) {
          lastTime = currentTime;
          fn.apply(this, args);
        }
      };
    };

    const handleMouseMove = throttle((event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - ref.current.clientWidth / 2;
      const mouseY = clientY - ref.current.clientHeight / 2;
      ref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, 20);

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);
  }, [location]);

  return <AppCursor ref={ref} isActive={isActive} />;
};

export default CustomCursor;

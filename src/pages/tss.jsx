import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import device, { TextWrapper } from "../generalStyles";
import LAPTOP from "../assets/TSS/AC_P_Laptop.svg";
import LOGO from "../assets/TSS/AC_P_TSS_Logo.svg";
import HomePage from "../assets/TSS/TSS Landing Page Desktoptss.png";
import ProjectPage from "../assets/TSS/TSS Project Page Desktotss.png";

const LogoTSS = styled(motion.img)`
  width: 40px;
  position: absolute;
  top: 71%;
  @media (orientation: landscape) {
    top: 100%;
  }
  @media ${device.tablet} {
    top: 54%;
  }
  @media ${device.tablet} and ${device.laptopH} {
    top: 53%;
  }
  @media ${device.tablet} and ${device.laptopH} and (orientation: landscape) {
    top: 69%;
  }
  @media ${device.laptopV} and (orientation: portrait) {
    top: 40%;
  }
  @media ${device.laptopM} {
    top: 56%;
  }
`;

const Laptop = styled(motion.img)`
  position: sticky;
  top: 30%;
  width: 320px;
  margin: 40px auto;
  @media ${device.tablet} {
    width: calc(84% - 54px);
    top: 40%;
  }
  @media ${device.laptopV} {
    width: calc(75% - 54px);
    top: 26%;
  }
`;

const Img = styled.img`
  width: 80%;
  margin: 8% auto;
  @media ${device.tablet} and ${device.laptopH} {
    width: calc(68% - 54px);
    margin-top: 10%;
  }
  @media ${device.tablet} and ${device.laptopH} and (orientation: landscape) {
    width: calc(61% - 54px);
    // margin-top: 10%;
  }
  @media ${device.laptopV} and ${device.laptopM} {
    width: calc(61% - 54px);
    // margin-top: 10%;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1366px;
  ${Img}:nth-child(4) {
    margin-top: 100px;
    padding-bottom: 300px;
  }
  @media (orientation: landscape) {
    ${Img}:nth-child(4) {
      margin-top: 100px;
      padding-bottom: 98px;
    }
  }
`;

const Tss = () => {
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      const handleResize = () => setWindowDimensions(getWindowDimensions());

      // console.log(width >= 1024 ? ref.current.style.scale : "");
      // console.log("inside effect", width);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextWrapper>
        <h3>THESIDESTUDIO</h3>
        <h5
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Motion Studio
        </h5>
        <br />
        <p>
          THESIDESTUDIO provides solutions incluiding art direction,
          cinematography, 3D design and animation, concept creation, VFX and
          illustration. It focus and specialize on product visualization, 3D
          models, simulations and interactive experiences for media platforms,
          film and live events.
        </p>
        <br />
        <p>
          My task for this project included digital art direction, UX/UI design
          with responsive interactive prototyping for the wireframe and design.
        </p>
      </TextWrapper>

      <ImageWrapper>
        {/* <LogoTSS style={{ opacity: opacity }} src={LOGO} alt="logo" /> */}
        {/* <Laptop ref={ref} src={LAPTOP} alt="laptop frame" /> */}
        <Img src={HomePage} alt="desktop" />
        <Img src={ProjectPage} alt="project" />
      </ImageWrapper>
    </div>
  );
};

export default Tss;

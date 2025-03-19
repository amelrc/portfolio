import React, { useEffect, useRef } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useInView, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

import Marquee from "../../components/Marquee";
import Product from "../../components/productDesign";
import About from "../../components/sectionAbout";
import HeroBG from "../../components/heroBG";
import Principles from "../../components/principles";
import WorkExamples from "../../components/WorkExample";

import Pic1 from "../../images/girls_with_phones3x.png";
import Pic2 from "../../images/man_with_laptop3x.png";
import Pic3 from "../../images/young_people3x.png";
import Pic4 from "../../images/young_women_laptop3x.png";
// import MemojiMe from "../../images/Memoji.svg";

import {
  Text,
  TextWrapper,
  ImageWrapper,
  H1,
  P1,
  P2,
  P3,
  P4,
  Memoji,
} from "./homeStyles";
import { FlexColCen } from "../../generalStyles";

const Home = () => {
  const textData = [
    { component: H1, text: "Full Stack Designer", duration: 1 },
    { component: P2, text: "Design", duration: 2, delay: 0.5 },
    { component: P3, text: "that", duration: 2.5, delay: 0.6 },
    { component: P4, text: "WORKS", duration: 2.8, delay: 0.7 },
    { component: P1, text: "(for you & them)", duration: 2, delay: 0.8 },
  ];
  const itemVariants = {
    s: { opacity: 0, y: 40 },
    e: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    // Wait for the hash to change and then scroll to the section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("e");
    }
  }, [isInView, mainControls]);

  return (
    <FlexColCen ref={ref}>
      <HeroBG>
        <FlexColCen style={{ position: "absolute", zIndex: 10, width: "100%" }}>
          <TextWrapper>
            {textData.map((item, index) => {
              const { component: Component, text, duration, delay } = item;
              return (
                <Component
                  key={index}
                  variants={itemVariants}
                  initial="s"
                  animate={mainControls}
                  transition={{ duration, delay }}
                >
                  {text}
                </Component>
              );
            })}
          </TextWrapper>
          <ImageWrapper>
            {/* <MemojiMyself src={MemojiMe} alt="memoji of myself" /> */}
            <Text
              variants={itemVariants}
              initial="s"
              animate={mainControls}
              transition={{ duration: 3, delay: 2 }}
            >
              Based in The Netherlands but working worldwide. Partnering with
              local and international clients that value users just as much as I
              do.
            </Text>
          </ImageWrapper>
        </FlexColCen>
      </HeroBG>

      {/* <img src={ScrollArrow} alt="arrow indicating to scroll down" /> */}

      <GlobalCanvas style={{ zIndex: -1 }}>
        <ambientLight />
      </GlobalCanvas>
      <SmoothScrollbar>
        {(bind) => (
          <article
            style={{ width: "100vw", display: "flex", flexDirection: "column" }}
            {...bind}
          >
            <Marquee
              style={{
                fontFamily: "Roxborough Thin",
                overflow: "hidden",
                background: "#e9f2ff",
                color: "#bd00ff",
                zIndex: 1,
              }}
            >
              <Memoji src={Pic1} alt="illustration people talking" /> user
              <Memoji src={Pic2} alt="illustration gay man with laptop = me" />
              centric
            </Marquee>

            <Marquee
              reverse="true"
              // uppercase
              style={{
                fontFamily: "SF UI Display Thin",
                overflow: "hidden",
                background: "#36003A",
                color: "white",
              }}
            >
              <Memoji src={Pic3} alt="illustration people together" /> digital
              <Memoji src={Pic4} alt="illustration women in tech" />
              products
            </Marquee>
          </article>
        )}
      </SmoothScrollbar>

      <Product />

      <WorkExamples />

      <Principles />

      <About />
    </FlexColCen>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useInView, useAnimation } from "framer-motion";

import Marquee from "./components/marquee";
import Product from "../Home/components/productDesign";
import About from "./components/About/sectionAbout";
import HeroBG from "./components/heroBG";
import Principles from "./components/principles";

import Pic1 from "../../images/girls_with_phones3x.png";
import Pic2 from "../../images/man_with_laptop3x.png";
import Pic3 from "../../images/young_people3x.png";
import Pic4 from "../../images/young_women_laptop3x.png";
// import MemojiMe from "../../images/Memoji.svg";

import {
  ImageWrapper,
  Memoji,
  HeroTextContainer,
  FSD,
  Design,
  That,
  Works,
  ForYou,
  IntoText,
} from "./homeStyles";
import { FlexColCen } from "../../generalStyles";
import WorkExamples from "./components/workExample";
import LocationHash from "../../components/locationHash";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("e");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <LocationHash />
      <FlexColCen ref={ref}>
        <div style={{ position: "absolute", zIndex: 10, width: "100%" }}>
          <HeroTextContainer>
            <FSD>full stack designer</FSD>
            <Design>Design</Design>
            <That>that</That>
            <Works>works</Works>
            <ForYou>(for you & them)</ForYou>
            <ImageWrapper>
              {/* <MemojiMyself src={MemojiMe} alt="memoji of myself" /> */}
              <IntoText>
                Based in The Netherlands but working worldwide. Partnering with
                local and international clients that value users just as much as
                I do.
              </IntoText>
            </ImageWrapper>
          </HeroTextContainer>
        </div>
        <HeroBG></HeroBG>

        {/* <img src={ScrollArrow} alt="arrow indicating to scroll down" /> */}

        <GlobalCanvas style={{ zIndex: -1 }}>
          <ambientLight />
        </GlobalCanvas>
        <SmoothScrollbar>
          {(bind) => (
            <article
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
              }}
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
                <Memoji
                  src={Pic2}
                  alt="illustration gay man with laptop = me"
                />
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
    </>
  );
};

export default Home;

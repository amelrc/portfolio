import React, { useEffect, useRef } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useInView, useAnimation } from "framer-motion";

import Marquee from "../../components/Marquee";
// import YourComponent from "../../components/projectCard";
// import Divider from "../../components/Divider";
import Product from "../../components/productDesign";
import About from "../../components/sectionAbout";
import HeroBG from "../../components/heroBG";
// import { MemojiMyself } from "./homeStyles";

import Pic1 from "../../images/girls_with_phones3x.png";
import Pic2 from "../../images/man_with_laptop3x.png";
import Pic3 from "../../images/young_people3x.png";
import Pic4 from "../../images/young_women_laptop3x.png";
import AllWork from "../../images/AC_P_Image_trans_1x.png";
// import MemojiMe from "../../images/Memoji.svg";
// import ScrollArrow from "../../images/Scroll_Arrow.svg";

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
  // const cardData = [
  //   {
  //     href: "/branding/logos",
  //     imageSrc: Pic1,
  //     logoSrc: Pic2,
  //     heading: "heading",
  //     description: "this is a description",
  //   },
  //   {
  //     href: "/",
  //     imageSrc: Pic3,
  //     logoSrc: Pic2,
  //     heading: "heading",
  //     description: "this is a description",
  //   },
  //   {
  //     href: "/",
  //     imageSrc: Pic4,
  //     logoSrc: Pic2,
  //     heading: "heading",
  //     description: "this is a description",
  //   },
  // ];

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


            <div style={{ maxWidth: 1400, width: "100%", margin: "auto", backgroundColor:'red' }}>
              {/* <ProjectList>
                <H2>
                  Most <Accent>recent</Accent> work
                </H2>
                <div style={{ width: "80%" }}>
                  {cardData.map((item, index) => (
                    <YourComponent
                      key={index}
                      href={item.href}
                      imageSrc={item.imageSrc}
                      logoSrc={item.logoSrc}
                      heading={item.heading}
                      description={item.description}
                    />
                  ))}
                </div>
                <Divider />
              </ProjectList> */}

            </div>
          </article>
        )}
      </SmoothScrollbar>

      <Product />
    
      <img id='work' style={{width: "100%", marginTop:200}} src={AllWork} alt="all work"/>
      <About />
    </FlexColCen>
  );
};

export default Home;

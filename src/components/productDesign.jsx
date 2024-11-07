import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../generalStyles";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useScrollbar, useTracker } from "@14islands/r3f-scroll-rig";
import Grid from "../images/Grid_large.svg";
import Cone from "../images/cone.svg";
import Disk from "../images/disk.svg";
import Twirl from "../images/curved_shape.svg";


const Wrapper = styled(motion.div)`
  background-image: url(${Grid});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  // padding: 10% 0;
  width: 100%;
  // height: 422px;
}
  @media ${device.tablet} {
    // height: 800px;
  }
`;

const H2 = styled.p`
  font-family: "SF UI Display Thin";
  color: #49014f;
  font-size: 1.5rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 2.8rem;
  }
`;

const Accent = styled.p`
  font-family: "Roxborough Bold";
  font-size: 2.5rem;
  color: #38ff70;
  text-align: center;
  -webkit-text-stroke: 1px #bf8b1f;

  @media ${device.tablet} {
    font-size: 5rem;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Decoration = styled(motion.img)`
  position: absolute;
  user-select: none;
  animation: ${floatAnimation} 5s ease-in-out infinite;

    bottom: -8%;
        width: 40px;
        right: 20%;

  &:nth-child(2) {
    width: 60px;
    left: 15%;
    top: -10%;
  }

  &:nth-child(3) {
    width: 50px;
    right: 1%;
    top: 40%;
  }
  &:nth-child(4) {
    width: 80px;
    left: 25%;
    bottom: 0;
  }

  @media ${device.tablet} {
 
    bottom: -8%;
        width: 140px;
        right: 20%;

    &:nth-child(2) {
      width: 140px;
        left: 8%;
        top: -26%;
    }

    &:nth-child(3) {
     width: 150px;
        right: 4%;
        top: 6%;
    }
    // &:nth-child(4) {
    //   bottom: -8%;
    //     width: 140px;
    //     right: 2%;
    // }
  }
`;

const TextWrapper = styled.div`
    // margin: auto;
    // width: 90%;
    padding: 0 10%;

    // @media ${device.tablet} {
      // width: 80%;
    //   }
      @media ${device.laptop}{
      // width: auto;
      // margin: 6% auto;
      }
`
const Text = styled(motion.p)`
  font-size: 1.5rem;

  font-family: SF UI Display Bold;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${device.tablet} {
    font-size: 2rem;
  }
     @media ${device.laptop}{
      font-size: 3rem;
      }
`;

const Description = styled(motion.p)`
  font-size: 1rem;

  font-family: SF UI Display Thin;

  color:#230808;

  width: 50%;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;



const Product = () => {
  const textData = [
    {
      bg: "linear-gradient(90deg, #BF8B1F, #a64610)",
      title: "Design Strategy",
      text: 'Transform your vision into a strategic design plan that aligns with your business goals, ensuring every design decision drives measurable results',
      position: "start",
      alignItems: 'flex-start'
    },
    {
      bg: "linear-gradient(45deg, #F35800, #C61F1F)",
      title: "Design Systems",
      text: 'Transform your vision into a strategic design plan that aligns with your business goals, ensuring every design decision drives measurable results',
      position: "end",
      alignItems: 'flex-end',
      
    },
    {
      bg: "linear-gradient(45deg, #1C8A31, #167665)",
      title: "Workshop Facilitation",
      text: 'Transform your vision into a strategic design plan that aligns with your business goals, ensuring every design decision drives measurable results',
      position: "start",
      alignItems: 'flex-start'
    },
    {
      bg: "linear-gradient(45deg, #2795FB, #002091)",
      title: "Design Sprints",
      text: 'Transform your vision into a strategic design plan that aligns with your business goals, ensuring every design decision drives measurable results',
      position: "end",
      alignItems: 'flex-end'
    },
    {
      bg: "linear-gradient(45deg, #8B53D2, #5A3BD3)",
      title: "Web & Mobile App Design ",
      text: 'Transform your vision into a strategic design plan that aligns with your business goals, ensuring every design decision drives measurable results',
      position: "start",
      alignItems: 'flex-start'
    },
  ];

  const imagesData = [
    { image: Cone, alt: "decorative images" },
    { image: Disk, alt: "decorative images" },
    { image: Twirl, alt: "decorative images" },
  ];

  const el = useRef();
  const { onScroll } = useScrollbar();
  const { scrollState } = useTracker(el);
  const progress = useMotionValue(0);

  useEffect(() => {
    return onScroll(() => progress.set(scrollState.visibility));
  }, [onScroll, progress, scrollState]);

  // const y = useTransform(progress, [0, 1], [100, 0]);
  const x = useTransform(progress, [0, 1], ["2%", "0%"]);
  // const opacity = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div id='services' ref={el} style={{width:'100%'}}>
      <div style={{padding: '80px 0'}}>
        <H2>A versatile creator focused in</H2>
        <Accent>Product Design</Accent>
      </div>
    <Wrapper >

      {/* <motion.div style={{ y, opacity }}>
      </motion.div> */}
      {imagesData.map((i, index) => (
        <Decoration key={index} src={i.image} alt={i.alt} />
      ))}

      <TextWrapper>
        

        {textData.map((item, index) => (
          <div style={{display: "flex", flexDirection: "column", alignItems: item.alignItems,  padding: '20px 0'}} >
            <Text
              key={index}
              style={{
                backgroundImage: item.bg,
                textAlign: item.position,
                x,
               
              }}
              >
              {item.title}
            </Text>
            <Description style={{textAlign: item.position, x}}>{item.text}</Description>
          </div>
        
      ))}
   
      </TextWrapper>
    </Wrapper>
    </div>
  );
};

export default Product;

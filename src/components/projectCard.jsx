import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../generalStyles";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useScrollbar, useTracker } from "@14islands/r3f-scroll-rig";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  align-items: center;
  // width: 90%;
  border-radius: 8px;
  margin: 2% 0;
}

  @media ${device.tablet} {
    flex-direction: row-reverse;
    height: 500px;
    // width:70%
  }
`;

const Image = styled.img`
  width: 90%;
  object-fit: contain;
  padding-top: 40px;

  @media ${device.tablet} {
    padding: 56px 40px 0px;
    object-fit: contain;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  padding: 32px 32px 32px 56px;

  @media${device.tablet} {
    justify-content: space-between;
    height: 100%;
  }
`;

const Logo = styled.img`
  height: 80px;

  // @media ${device.tablet} {

  // }
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: SF UI Display Thin;
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: 3rem;
    margin-bottom: 24px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  font-family: SF UI Display Thin;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

// const H2 = styled(motion.h2)`
//   font-family: "SF UI Display Thin";
//   color: #49014f;
//   font-size: 2.5rem;
//   margin: 8% 0;

//   @media ${device.tablet} {
//     font-size: 5vw;
//   }
// `;

// const Accent = styled.span`
//   font-family: "Roxborough Bold";
//   font-size: 2.5rem;
//   color: #38ff70;
//   -webkit-text-stroke: 1px #ed00ff;
//   text-align: center;

//   @media ${device.tablet} {
//     font-size: 5vw;
//   }
// `;

const ClientCard = ({ href, imageSrc, logoSrc, heading, description }) => {
  const el = useRef();
  const { onScroll } = useScrollbar();
  const { scrollState } = useTracker(el);
  const progress = useMotionValue(0);

  useEffect(() => {
    return onScroll(() => progress.set(scrollState.visibility));
  }, [onScroll, progress, scrollState]);

  const y = useTransform(progress, [0, 1], ["25%", "0%"]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);

  return (
    <Link style={{ textDecoration: "none" }} to={href}>
      <Wrapper ref={el} style={{ y, opacity, scale }}>
        <Image src={imageSrc} alt="Image" />
        <ContentWrapper>
          <div>
            <Logo src={logoSrc} alt="Logo" />
            <Heading>{heading}</Heading>
          </div>
          <Description>{description}</Description>
        </ContentWrapper>
      </Wrapper>
    </Link>
  );
};

export default ClientCard;

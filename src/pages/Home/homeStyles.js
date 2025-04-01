import styled, { css, keyframes } from "styled-components";
import { device, T_Rox_Bold, T_SF_Bold, T_SF_Thin } from "../../generalStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// used in 404
export const H1 = styled(motion.h1)`
  font-family: "SF UI Display Bold";
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 5rem;
  text-align: center;
  color: #36003a;
`;
// used in All Cases (Work)
export const H2 = styled.h2`
  font-family: "SF UI Display Thin";
  color: #49014f;
  font-size: 2.5rem;
  margin: 8% 0;

  @media ${device.tablet} {
    font-size: 5vw;
  }
`;

// Staggered animation Mar 2025
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper to apply stagger effect using nth-child
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 10px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 160px 0px 40px;

  & > * {
    opacity: 0; /* Initially hidden */
    animation: ${fadeIn} 0.6s ease-out forwards;
  }

  & > *:nth-child(1) {
    animation-delay: 0s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.6s;
    animation-duration: 1s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.9s;
    animation-duration: 1.4s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.9s;
    animation-duration: 1.4s;
  }
  & > *:nth-child(6) {
    animation-delay: 1.4s;
    animation-duration: 1.8s;
  }
`;

export const HeroTextAnimation = css`
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const FSD = styled.h1`
  ${T_SF_Bold}
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export const Design = styled.p`
  ${T_Rox_Bold}
  font-size: 5rem;
  color: #ed00ff;
  padding-top: 8%;
  @media ${device.laptop} {
    font-size: 6rem;
  }
`;

export const That = styled.p`
  ${T_SF_Bold}
  font-size: 5rem;
  mix-blend-mode: hard-light;
  color: transparent;
  -webkit-text-stroke: 1px #36003a;
  @media ${device.laptop} {
    font-size: 6rem;
  }
`;

export const Works = styled.p`
  ${T_SF_Bold}
  font-size: 5rem;
  text-transform: uppercase;
  @media ${device.laptop} {
    font-size: 6rem;
  }
`;

export const ForYou = styled.p`
  ${T_SF_Thin}
  font-size: 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    width: 80%;
  }
`;

export const IntoText = styled.p`
  ${T_SF_Thin}
  font-size: 1.1rem;
  text-align: center;
  width: 80%;
  padding-top: 96px;

  @media ${device.tablet} {
    width: 40%;
    text-align: start;
  }
`;

// used in 404
export const P1 = styled(motion.p)`
  font-family: "SF UI Display Thin";
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 3vw;
  }
`;

// export const P2 = styled(motion.p)`
//   color: #ed00ff;
//   font-family: "Roxborough Bold";
//   font-size: 4.5rem;
//   text-align: center;
//   @media ${device.tablet} {
//     font-size: 7vw;
//   }
// `;

// export const P3 = styled(motion.p)`
//   font-family: "SF UI Display Bold";
//   line-height: normal;
//   font-size: 5rem;

//   mix-blend-mode: hard-light;
//   color: transparent;
//   -webkit-text-stroke: 1px #36003a;
//   text-align: center;
//   @media ${device.tablet} {
//     font-size: 6vw;
//   }
// `;

// export const P4 = styled(motion.p)`
//   font-family: "SF UI Display Bold";
//   font-weight: 600;
//   font-size: 4.5rem;
//   text-align: center;
//   @media ${device.tablet} {
//     font-size: 7vw;
//   }
// `;

export const MemojiMyself = styled.img`
  width: 200px;

  @media ${device.tablet} {
    margin-top: -100px;
  }
`;

export const Memoji = styled.img`
  height: 8vh;
  object-fit: cover;
  margin: 0 16px;
  @media ${device.mobileL} {
    height: 10vh;
  }
  @media ${device.laptop} {
    height: 18vh;
  }
`;

// export const ProjectList = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 40px;
// `;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

// make reponsive
export const CaseButton = styled(Link)`
  position: sticky;
  bottom: 10%;
  text-transform: uppercase;
  padding: 1.5vw 4rem;
  border-radius: 1000px;
  background-color: #38ff6f;
  color: #36003a;
  border: solid 2px #36003a;
  cursor: pointer;
  font-family: "SF UI Display Light";
  font-size: 5vh;
  text-decoration: none;
`;

export const CloseButton = styled(Link)``;

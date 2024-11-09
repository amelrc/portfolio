import styled from "styled-components";
import { device } from "../../generalStyles";
import { motion } from "framer-motion";

export const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 40px;

  @media ${device.tablet} {
    margin-top: 80px;
    padding: 60px 0 40px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    width: 60%;
    justify-content: space-between;
    margin: -56px auto;
  }
`;

export const H1 = styled(motion.h1)`
  font-family: "SF UI Display Bold";
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 5rem;
  text-align: center;
  color: #36003a;
`;

export const H2 = styled.h2`
  font-family: "SF UI Display Thin";
  color: #49014f;
  font-size: 2.5rem;
  margin: 8% 0;

  @media ${device.tablet} {
    font-size: 5vw;
  }
`;

export const P1 = styled(motion.p)`
  font-family: "SF UI Display Thin";
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 3vw;
  }
`;

export const P2 = styled(motion.p)`
  color: #ed00ff;
  font-family: "Roxborough Bold";
  font-size: 4.5rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 7vw;
  }
`;

export const P3 = styled(motion.p)`
  font-family: "SF UI Display Bold";
  line-height: normal;
  font-size: 5rem;

  mix-blend-mode: hard-light;
  color: transparent;
  -webkit-text-stroke: 1px #36003a;
  text-align: center;
  @media ${device.tablet} {
    font-size: 6vw;
  }
`;

export const P4 = styled(motion.p)`
  font-family: "SF UI Display Bold";
  font-weight: 600;
  font-size: 4.5rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 7vw;
  }
`;

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

export const Text = styled(motion.p)`
  font-family: "SF UI Display Thin";
  font-size: 1.1rem;
  text-align: center;
  width: 80%;
  margin-bottom: 100px;
  font-weight: 600;

  @media ${device.tablet} {
    width: 40%;
    text-align: start;
    margin-top: 100px;
  }
`;

export const ProjectList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

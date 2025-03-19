import styled from "styled-components";
import { device } from "../../generalStyles";
import { Link } from "react-router-dom";

export const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 6% 0 0;
  margin: auto;
  position: relative;

  @media ${device.laptop} {
    width: 70%;
  }
`;

export const CaseIntro = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 4% 0 8%;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CaseDescription = styled.p`
  color: #230808;
  font-size: 1rem;
  font-family: SF UI Display Thin;
  line-height: 125%;
  margin-bottom: 4%;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
  @media ${device.laptop} {
    width: 60%;
  }
`;

export const CaseImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectButton = styled(Link)`
  text-transform: uppercase;
  padding: 1vw 2rem;
  border-radius: 1000px;
  color: #36003a;
  border: solid 1px #36003a;
  cursor: pointer;
  font-family: "SF UI Display Light";
  font-size: 3.4vw;
  text-decoration: none;

  @media ${device.tablet} {
    padding: 1vw 3rem;
    font-size: 3vw;
    border: solid 2px #36003a;
  }
  @media ${device.laptop} {
    padding: 1.5vw 4rem;
    font-size: 2vw;
  }
  &:hover {
    background-color: #38ff6f;
  }
`;

export const CloseButton = styled(Link)`
  padding: 1rem;
  border-radius: 1000px;
  border: solid 1px #36003a;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: fit-content;

  @media ${device.tablet} {
    padding: 1.2rem;
  }
  @media ${device.desktop} {
  }
  &:hover {
    background-color: #38ff6f;
  }
`;

export const CloseIcon = styled.img`
  width: 24px;
  @media ${device.tablet} {
    width: 32px;
  }
  @media ${device.laptop} {
    width: 40px;
  }
`;

export const CaseTitle = styled.h1`
  font-family: "SF UI Display Thin";
  color: #49014f;
  font-size: 2.5rem;
  margin: 10% 0 0 0;

  @media ${device.tablet} {
    font-size: 5vw;
  }
`;

export const CaseSubTitle = styled.p`
  color: #bd00ff;
  font-family: "Roxborough Thin";
  font-size: 3rem;
  text-align: left;
  padding: 1% 0 8%;
  @media ${device.tablet} {
    font-size: 3vw;
  }
`;

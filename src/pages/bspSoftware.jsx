import styled from "styled-components";
import Tag from "../components/tag";
import { TextWrapper, device } from "../generalStyles";
import BSP_Ipad from "../images/assets/BSP/BSP_Ipad@4x.png";
import All from "../images/assets/BSP/BSP_ALL.png";

const BG = styled.div`
  background: linear-gradient(
    150deg,
    rgba(5, 0, 39, 1) 0%,
    rgba(35, 0, 125, 1) 100%
  );
`;

export const SubHeading = styled.h5`
  color: #9a9a9a;
  font-weight: normal;
  margin: 16px 0;
  font-size: 18px;
`;

const DecorWrapper = styled.div`
  overflow: hidden;
  padding: 4% 0px;
  max-width: 1000px;
  margin: auto;
`;

const ImageDecor = styled.img`
  transform: skew(-0.06turn, 18deg);
  width: 40%;
  margin: 20px auto auto 40%;
`;

export const InfoWrapper = styled.div`
  background-color: white;
  padding: 16% 8%;
  font: 16px/24px kumbh Sans;
  color: #0d0b33;
  @media ${device.tablet} {
    padding: 6%;
  }
  @media ${device.laptopV} {
    width: calc(80% - 58px);
    margin: auto;
    max-width: 800px;
  }
`;

const ImgAll = styled.img`
  width: 100%;
`;

const Bsp = () => {
  const designTags = [
    "Wireframing",
    "Design Update",
    "User Interface Desgin",
    "User Personas",
    "Design System",
    "Usability Testing",
  ];
  const programmingTags = [
    "React",
    "Typescript",
    "NextJS",
    "JSS",
    "Material UI",
  ];
  return (
    <BG>
      <TextWrapper>
        <h3 style={{ color: "#E2FAFE" }}>Blue Star Planning</h3>
        <SubHeading>Planning Software</SubHeading>
      </TextWrapper>
      <DecorWrapper>
        <ImageDecor src={BSP_Ipad} alt="desktop" />
      </DecorWrapper>
      <InfoWrapper>
        <SubHeading>Overview</SubHeading>
        <p>
          BSP (Blue Star Planning) is an APS-software that complements
          companies' ERP systems. This solution is tailored for production
          companies, system integrators, and industrial automation for
          manufacturing industries. It uses advanced algorithms to monitor the
          production environment.
        </p>
        <br />
        <p>
          The main issue this application solves is to maximize productivity by
          creating an automated production planning. The biggest challenge was
          to display as much data as possible, however, without overcrowding the
          interface.
        </p>
        <SubHeading>What I did</SubHeading>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {designTags.map((el, i) => (
            <Tag key={i} word={el} bgColor={"#9398ff"} />
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {programmingTags.map((el, i) => (
            <Tag key={i} word={el} bgColor={"#ff3b6d"} />
          ))}
        </div>
      </InfoWrapper>
      <div style={{ padding: "12% 0", maxWidth: 1000, margin: "auto" }}>
        <ImgAll src={All} alt="all" />
      </div>
    </BG>
  );
};

export default Bsp;

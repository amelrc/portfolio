// import { Link } from "react-router-dom";
// import Accordion from "../components/accordion";
import styled from "styled-components";
import device, { TextWrapper } from "../generalStyles";
import img_rubrics from "../images/7R_AC.png";
import img_BSP1 from "../images/4BSP_AC.png";
import img_BSP2 from "../images/5BSP_ACresized.png";
import img_BSP6 from "../images/6BSP_AC.png";
import img_D1 from "../images/1D_AC.png";
import img_D2 from "../images/2D_AC.png";
import img_D3 from "../images/3D_AC.png";
import img_C8 from "../images/8C_AC.png";
import img_HF10 from "../images/10HF_AC.png";
import img_HF9 from "../images/9HF_AC.png";
import img_TSS11 from "../images/11TSS_AC.png";
import img_DS12 from "../images/12DS_AC.png";

export const MenuWrapper = styled.div`
  background-color: #0d0b33;
  height: calc(100vh - 47px);
  overflow: scroll;
  @media ${device.tablet} {
    height: 100vh;
  }
`;

const Header1 = styled.h1`
  font-size: 12vw;
  font-weight: 500;
  color: #fdfde5;
  padding: 20% 10%;
  @media ${device.tablet} {
    font-size: 5rem;
  }
`;

const Header2 = styled.h2`
  font-size: 10vw;
  font-weight: 300;
  color: #fdfde5;
  // text-align: center;
  padding: 0% 10%;
  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

const Header3 = styled.h3`
  font-size: 20px;
  font-weight: 300;
  color: #fdfde5;
  padding: 6% 10%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 6% 0;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      {/* <Accordion /> */}
      <Header1>
        I create web applications with attention to detail while staying
        faithful to the design.
      </Header1>

      <Header2>
        Design with focus on Detail, Functionality and Productivity
      </Header2>
      <Header3>
        The main focus of my work is to enhance everyday life. Design that is
        practical for both users and developers, consistent and looks good.
      </Header3>

      {/* /////////////////// */}

      <TextWrapper style={{ color: "#fdfde5" }}>
        <h3>BLUE STAR PLANNING</h3>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          APS-software app & Website
        </h4>
        <p>
          BSP (Blue Star Planning) is an APS-software company that complements
          companies' ERP systems. This solution is tailored for production
          companies, system integrators, and industrial automation for
          manufacturing industries. It uses advanced algorithms to monitor the
          production environment.
        </p>
        {/* <br /> */}
        {/* <p>
          The main issue this application solves is to maximize productivity by
          creating an automated production planning. The biggest challenge was
          to display as much data as possible, however, without overcrowding the
          interface.
        </p> */}
      </TextWrapper>
      <ImageWrapper style={{ flexDirection: "column", alignItems: "center" }}>
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_BSP1}
          alt="desktop"
        />
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_BSP2}
          alt="desktop"
        />
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_BSP6}
          alt="desktop"
        />
      </ImageWrapper>

      <TextWrapper style={{ color: "#fdfde5" }}>
        <h3>DELIVERECT</h3>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Marketing Website
        </h4>
        <p>
          Deliverect creates software for restaurants which integrates online
          orders to a POS in order to reduce failures and order mistakes while
          speeding up order preparation.
        </p>
        {/* <br /> */}
        {/* <p>
          The main issue this application solves is to maximize productivity by
          creating an automated production planning. The biggest challenge was
          to display as much data as possible, however, without overcrowding the
          interface.
        </p> */}
      </TextWrapper>
      <ImageWrapper style={{ flexDirection: "column", alignItems: "center" }}>
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_D1}
          alt="desktop"
        />
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_D2}
          alt="desktop"
        />
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_D3}
          alt="desktop"
        />
      </ImageWrapper>
      <TextWrapper style={{ color: "#fdfde5" }}>
        <h3>COMPETA</h3>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Marketing Website
        </h4>
        <p>
          Competa is an agency for software development and resourcing
          solutions. Clients include market leaders in sectors such as Finance,
          Engineering, Media and Medical
        </p>
      </TextWrapper>

      <ImageWrapper>
        <img width="80%" src={img_C8} alt="desktop" />
      </ImageWrapper>

      <TextWrapper style={{ color: "#fdfde5", paddingTop: 0 }}>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Rubrics - Grading System App
        </h4>
        <br />
        <p>
          Leon van Gelder is a High-school in Groningen that uses a grading
          system based on rubrics. Students review each other’s skills with the
          use of rubrics, in place of the typical grading system we are all
          familiar with.
        </p>
        {/* <br />
        <p>
          I was brought on to improve the UI, which I did using pure vanilla
          javascript. The app is optimised for the Microsoft Surface Go, the
          device used by all school personnel.
        </p> */}
      </TextWrapper>

      <ImageWrapper>
        <img width="80%" src={img_rubrics} alt="desktop" />
      </ImageWrapper>

      <TextWrapper style={{ color: "#fdfde5" }}>
        <h3>FREELANCE</h3>
        <p style={{ margin: "16px 0" }}>
          I have been fortunate to meet and work with very talented people.
          These projects require me to identify and build the right features for
          the right users. Bringing these products to life has allowed me to
          grow through the researching, advising, consulting of people.
        </p>
      </TextWrapper>

      <TextWrapper style={{ color: "#fdfde5", paddingTop: 0 }}>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Dive Center
        </h4>
        <br />
        <p>
          Dive Spirit Mauritius is a diving centre in the north of Mauritius.
          They teach individuals and small groups for the dive of choice.
        </p>
      </TextWrapper>

      <ImageWrapper>
        <img width="80%" src={img_DS12} alt="desktop" />
      </ImageWrapper>
      <TextWrapper style={{ color: "#fdfde5", paddingTop: 0 }}>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Hidden Focus
        </h4>
        <br />
        <p>
          Hidden Focus is an online photo gallery for photographer Ray Hanson. I
          worked with Ray to design and build this highly customized website,
          including the development of a logo and an original font.
        </p>
      </TextWrapper>

      <ImageWrapper style={{ flexDirection: "column", alignItems: "center" }}>
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_HF9}
          alt="desktop"
        />
        <img
          width="80%"
          style={{ margin: "1% 0" }}
          src={img_HF10}
          alt="desktop"
        />
      </ImageWrapper>
      <TextWrapper style={{ color: "#fdfde5", paddingTop: 0 }}>
        <h4
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          The Side Studio
        </h4>
        <br />
        <p>
          This motion graphics agency specializes on product visualization, 3D
          models, simulations and interactive experiences for media platforms,
          film and live events.
        </p>
      </TextWrapper>

      <ImageWrapper>
        <img width="80%" src={img_TSS11} alt="desktop" />
      </ImageWrapper>
    </MenuWrapper>
  );
};

export default Menu;

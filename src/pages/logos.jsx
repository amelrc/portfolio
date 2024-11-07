import { AC } from "../images/assets/LOGOS/ac.js";
import { BSP } from "../images/assets/LOGOS/bsp.js";
import { CWSLA } from "../images/assets/LOGOS/cwsla.js";
import { HF } from "../images/assets/LOGOS/hf.js";
import { WAG } from "../images/assets/LOGOS/wag.js";
import styled from "styled-components";
import device from "../generalStyles";

const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 68px;
  @media ${device.tablet} {
    margin-bottom: 24px;
    flex-direction: flex;
    flex-wrap: wrap;
    width: calc(100vw - 54px);
    justify-content: center;
  }
`;

const LogoBox = styled.div`
  //   position: relative;
  // background: #f7f7f7;
  width: 90%;
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
  margin: 24px auto 0;
  svg {
    cursor: pointer;
    width: 200px;
  }
`;

const logos = [CWSLA, WAG, BSP, HF, AC];

const handleClick = () => {
  console.log("open modal");
};

const Logos = () => {
  return (
    <>
      <LogosWrapper>
        {logos.map((l, i) => (
          <LogoBox key={i} onClick={handleClick}>
            {l}
          </LogoBox>
        ))}
      </LogosWrapper>
    </>
  );
};

export default Logos;

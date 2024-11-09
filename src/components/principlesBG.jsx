import React from "react";
import styled, { css, keyframes } from "styled-components";

const moveInCircle = keyframes`
  0% {
    // transform: rotate(0deg);
  }
  100% {
    // transform: rotate(360deg);
  }
`;

const BlurFilter = css`
  filter: url(#goo) blur(40px);
`;

const GradientContainer = styled.div`
  ${BlurFilter};
  width: 100%;
  height: 100%;
`;

const OuterRed = styled.div`
  position: absolute;
  background: radial-gradient(
      circle,
      rgb(255, 74, 112) 0%,
      rgba(215, 38, 89, 0) 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 80%;
  height: 80%;
  transform-origin: 50% -400px;
  //   animation: ${moveInCircle} 20s linear 2 reverse;
`;

const Center = styled.div`
  background: radial-gradient(
      circle,
      rgb(191, 207, 12) 0%,
      rgba(91, 157, 72, 0) 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 100%;
  height: 100%;
`;

const OuterBlue = styled.div`
  position: absolute;
  background: radial-gradient(
      circle,
      rgb(48, 138, 255) 0%,
      rgba(165, 155, 212, 0) 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 160%;
  height: 160%;
  top: 20%;
  left: 20%;
  transform-origin: 50% -200px;
  //   animation: ${moveInCircle} 20s linear 10;
`;

const PrinciplesBG = ({ children }) => {
  return (
    <div className="gradient-bg">
      {children}
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SouceGraphic" stdDeviation={10} result="blur" />
            <feColorMatrix
              in="blur"
              mode={"matrix"}
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SouceGraphic" in2={"goo"} />
          </filter>
        </defs>
      </svg>

      <GradientContainer>
        <OuterRed />
        <Center />
        <OuterBlue />
      </GradientContainer>
    </div>
  );
};

export default PrinciplesBG;

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const size = {
  mobileL: "425px",
  tablet: "767px",
  laptop: "1023px",
  laptopL: "1365px",
  desktop: "1439px",
};

export const device = {
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
export default device;

// Fonts Mar 2025
export const T_SF_Thin = css`
  font-family: "SF UI Display Thin";
`;
export const T_SF_Bold = css`
  font-family: "SF UI Display Bold";
`;
export const T_Rox_Bold = css`
  font-family: "Roxborough Bold";
`;

export const FlexColCen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//For all headings 2. Colorfull with strokes. Nov 2024
export const Heading2 = styled.h2`
  font-family: "Roxborough Bold";
  font-size: 2.5rem;
  -webkit-text-stroke: 1px #ed00ff;
  @media ${device.tablet} {
    font-size: 8vw;
  }
`;

//For all subtitles under or above Heading2. Nov 2024
export const Subtitle = styled.p`
  font-family: "SF UI Display Thin";
  color: #49014f;
  font-size: 1.5rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 2.8rem;
  }
`;

//Button
export const BaseButton = styled(Link)`
  text-transform: uppercase;
  padding: 1vw 2rem;
  border-radius: 1000px;
  color: #36003a;
  border: solid 2px #36003a;
  cursor: pointer;
  font-family: "SF UI Display Light";
  font-size: 5vw;
  text-decoration: none;

  @media ${device.tablet} {
    padding: 1vw 3rem;
    font-size: 3vw;
  }
  @media ${device.desktop} {
    padding: 1.5vw 4rem;
    font-size: 2vw;
  }
  &:hover {
    background-color: #38ff6f;
  }
`;

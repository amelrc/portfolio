import styled from "styled-components";

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

export const FlexColCen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const TextWrapper = styled.div`
//   font-family: Kumbh Sans;
//   color: #0d0b33;
//   width: 80%;
//   display: flex;
//   flex-direction: column;
//   margin-left: auto;
//   margin-right: 4%;
//   padding-top: 100px;
//   max-width: 700px;
//   h3 {
//     font-weight: bold;
//     font-size: 24px;
//   }
//   p {
//     font-size: 14px;
//     line-height: 18px;
//   }
//   @media ${device.tablet} {
//     width: 60%;
//     margin-right: 10%;
//     padding-top: 140px;
//   }
//   @media ${device.laptopV} {
//     width: 50%;
//     margin-right: 16%;
//     padding-top: 140px;
//   }
// `;

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

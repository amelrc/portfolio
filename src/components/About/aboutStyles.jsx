import styled from "styled-components";
import { device, T_SF_Thin } from "../../generalStyles";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  background: linear-gradient(180deg, #180521 0%, #290b38 100%);
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const H3 = styled.h3`
  color: #bc9dfe;
  font-size: 1rem;
  font-family: SF UI Display Thin;
  font-weight: 200;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const H4 = styled.h4`
  text-align: center;
  font-size: 2rem;
  font-family: Roxborough Thin;
  font-weight: 500;
  color: #9747ff;
  text-align: start;
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

export const PText = styled.p`
  color: #c9ad74;
  font-size: 1.5rem;
  font-family: SF UI Display Thin;
  margin: 8% 0;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;
export const Accent = styled.span`
  background: linear-gradient(180deg, #74fc9a 0%, #9382ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 8px;
`;

// export const Button = styled(Link)`
//   color: #316fff;
//   font-size: 1rem;
//   font-family: SF UI Display Thin;

//   @media ${device.tablet} {
//     font-size: 1.5rem;
//   }
// `;

export const Image = styled.img`
  width: 50%;
  align-self: flex-end;
  margin-right: 16%;
  @media ${device.tablet} {
    width: 30%;
    margin-right: 8%;
  }
`;

export const TextWrapper = styled.div`
  align-self: center;
  margin: 16% 8%;
  @media ${device.tablet} {
    margin: 16% 32%;
  }
`;
export const TextColab = styled.p`
  text-align: start;
  color: #d3cfc0;
  font-size: 1rem;
  font-family: SF UI Display Thin;
  margin: 40px 0;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  font-family: SF UI Display Thin;
  font-size: 1rem;
  margin-left: 4px;
  background: transparent;
  color: #ff3b6d;
  border: none;
  cursor: pointer;
  user-select: none;
  &:focus-visible,
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fdfde5;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: -30px;
  margin-left: 50%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  text-align: start;
  color: #d3cfc0;
  font-size: 1rem;
  font-family: SF UI Display Thin;
  margin: 40px 0;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  ${T_SF_Thin}
  color: #d3cfc0;
  font-size: 1.4rem;
  padding: 16px 0;
`;

export const ContentWrapper = styled.div`
  width: 55%;
  margin: 16% 16% 8% 16%;
`;

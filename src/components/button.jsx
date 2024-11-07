import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../generalStyles";

const ButtonComponent = styled(Link)`
  color: ${(props) => props.color};
  font-family: SF UI Display Thin;
  font-size: 1.2rem;
  white-space: nowrap;
  text-decoration: none;
  margin: 8px;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const Button = ({ to, children, color }) => {
  return (
    <ButtonComponent to={to} color={color}>
      {children}
    </ButtonComponent>
  );
};

export default Button;

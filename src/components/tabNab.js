import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../generalStyles";

const Tab = styled.p`
  font: normal normal bold 22px/22px Kumbh Sans;
  color: #fdfde5;
  margin: 12px auto;
  text-align: center;
`;
const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0b33;
  border-top: solid 1px #fdfde5;
  width: 100%;
  // margin: 0 1px;
  &:hover {
    background-color: #fdfde5;
  }
  &:hover ${Tab} {
    color: #0d0b33;
  }
  @media ${device.laptopV} {
    transform: rotate(180deg);
    border-bottom: solid 1px #fdfde5;
    border-top: none;
    // background-color: transparent;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const TabNav = ({ text, href }) => {
  return (
    <TabWrapper>
      <Links to={href}>
        <Tab>{text}</Tab>
      </Links>
    </TabWrapper>
  );
};

export default TabNav;

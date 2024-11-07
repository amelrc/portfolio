import React from "react";
import styled from "styled-components";
import Button from "./button";
import device from "../generalStyles";

const Container = styled.div`
  display: flex;
  margin: 2% 0 20%;
  width: 80%;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  align-items: center;
`;
const Line = styled.div`
  height: 1px;
  display: none;
  @media ${device.tablet} {
    width: 100%;
    display: inline;
  }
`;

const Divider = () => {
  return (
    <Container>
      <Wrapper>
        <Line
          style={{
            background: "linear-gradient(90deg, #F5B93D 0%, #FFFAF0 100%)",
          }}
        />
        <Button color={"#49014F"} to="/projects">
          More projects
        </Button>
      </Wrapper>

      <Wrapper>
        <Button color={"#ED00FF"} to="/contact">
          Let's chat?
        </Button>
        <Line
          style={{
            background: "linear-gradient(90deg, #FFFAF0 0%, #F5B93D 100%)",
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default Divider;

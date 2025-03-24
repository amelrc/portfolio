import React from "react";
import styled from "styled-components";
import { BaseButton } from "../generalStyles";
import { H1, P1 } from "./Home/homeStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  gap: 40px;
`;

const NotFound = () => {
  return (
    <Container>
      <H1 style={{ fontSize: "8rem" }}>404</H1>
      <P1>Oops! The page you are looking for doesn’t exist.</P1>

      <BaseButton
        to={{ pathname: "/", hash: "" }}
        style={{
          backgroundColor: "#38ff6f",
        }}
      >
        Go Home
      </BaseButton>
    </Container>
  );
};

export default NotFound;

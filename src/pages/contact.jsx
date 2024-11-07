import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { MenuWrapper } from "./menu";
import AboutImage from "../images/about.JPG";
import { device } from "../generalStyles";

export const TextWrapper = styled.div`
  font-family: Kumbh Sans;
  color: #fdfde5;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 4%;
  padding: 100px 0;
  max-width: 700px;
  h1 {
    font: 60px Kumbh Sans;
    color: #fdfde5;
    margin: auto 16% 16%;
  }
  h3 {
    font-weight: bold;
    font-size: 40px;
    margin: 8%;
  }
  p {
    font: 20px/36px Kumbh Sans;
    margin: 4% 8%;
  }

  @media ${device.tablet} {
    width: 60%;
    margin-right: 10%;
    padding-top: 140px;
  }
  @media ${device.laptopV} {
    width: 50%;
    margin-right: 16%;
    padding-top: 140px;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 0px;
  margin-left: 50%;
`;

const Input = styled.input`
  font: 20px/36px Kumbh Sans;
  margin: 4% 8%;
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
  @media (min-width: 600px) {
    margin: 4% auto 4% 4px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
`;

const About = () => {
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => (copied ? setCopied(false) : null), 1500);
    return () => clearTimeout();
  }, [copied]);

  const copyToClipboard = () => {
    setCopied(true);
    textAreaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <MenuWrapper>
      <TextWrapper style={{ width: "100%" }}>
        <h1>Let's make something great!</h1>
        <h3>Contact</h3>
        <p>
          I'm seeking out opportunities to collaborate with people, companies
          and agencies. Bring your ideas to me, I would love the chance to pitch
          my experience to collaborate with you. Let’s solve life and business
          problems together.
        </p>
        <ContactWrapper>
          <p style={{ margin: "4% 0 4% 8%" }}>Feel free to reach out at</p>
          {copied && <Span>Copied to clipboard</Span>}

          <Input
            readOnly
            ref={textAreaRef}
            value="amelrc@gmail.com"
            onClick={copyToClipboard}
          />
        </ContactWrapper>
      </TextWrapper>
    </MenuWrapper>
  );
};

export default About;

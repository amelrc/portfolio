import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../generalStyles";
import { motion } from "framer-motion";

import Me from "../images/Myself_circle.png";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  background: linear-gradient(180deg, #180521 0%, #290b38 100%);
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const H3 = styled.h3`
  color: #bc9dfe;
  font-size: 1rem;
  font-family: SF UI Display Thin;
  font-weight: 200;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const H4 = styled.h4`
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

const PText = styled.p`
  color: #c9ad74;
  font-size: 1.5rem;
  font-family: SF UI Display Thin;
  margin: 8% 0;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;
const Accent = styled.span`
  background: linear-gradient(180deg, #74fc9a 0%, #9382ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 8px;
`;

const Button = styled(Link)`
  color: #316fff;
  font-size: 1rem;
  font-family: SF UI Display Thin;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const Image = styled.img`
  width: 50%;
  align-self: flex-end;
  margin-right: 16%;
  @media ${device.tablet} {
    width: 30%;
    margin-right: 8%;
  }
`;

const TextWrapper = styled.div`
  align-self: center;
  margin: 16% 8%;
  @media ${device.tablet} {
    margin: 16% 32%;
  }
`;
const TextColab = styled.p`
  text-align: start;
  color: #d3cfc0;
  font-size: 1rem;
  font-family: SF UI Display Thin;
  margin: 40px 0;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  font-family: SF UI Display Thin;
   font-size: 1rem;
  margin-left: 4px ;
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

const Span = styled.span`
  position: absolute;
  top: -30px;
  margin-left: 50%;
`;

const ContactWrapper = styled.div`
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
    document.execCommand(copied);
  };





  return (
    <Wrapper>
      <Container>
        <div id='about' style={{ width: "55%", margin: "16% 16% 8% 16%" }}>
          <H3>a bit about me</H3>
          <PText>
            Love creating captivating digital experiences that can change
            someone's
            <Accent>life for the better</Accent>; masterpieces that leave users
            in awe.
          </PText>
          {/* <Button to="/about"> ...and bit more</Button> */}
        </div>
        <Image src={Me} alt="portrait of myself" />
        <TextWrapper id='contact'>
          <H4>Let's collaborate</H4>
          <TextColab>
            I'm always looking to collaborate on interesting and innovative
            projects, whether they’re improving an application's experience,
            building a design system or rethinking the entire shablam.
            <br />
            <br />
            





      
            <ContactWrapper>

            <p style={{color:'#d3cfc0'}} >Find me on{" "}
            <Link
              style={{ color: "inherit" }}
              to="https://www.linkedin.com/in/amel-caballero-design/"
            >
              LinkedIn
            </Link>
           

            {" "}or{" "}

          
          </p>
          {copied && <Span>Copied to clipboard</Span>}

          <Input
            readOnly
            ref={textAreaRef}
            value="amelrc@gmail.com"
            onClick={copyToClipboard}
            />
      
        </ContactWrapper>
 




          </TextColab>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;

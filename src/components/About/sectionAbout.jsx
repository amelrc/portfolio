import React, { useRef, useEffect, useState } from "react";

import Me from "../../images/Myself_circle.png";
import { Link } from "react-router-dom";
import {
  Accent,
  ContactWrapper,
  Container,
  ContentWrapper,
  H3,
  H4,
  Image,
  Input,
  PText,
  Span,
  Text,
  TextColab,
  TextWrapper,
  Wrapper,
} from "./aboutStyles";

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
        <ContentWrapper id="about">
          <H3>a bit about me</H3>
          <PText>
            Love creating captivating digital experiences that can change
            someone's
            <Accent>life for the better</Accent>; masterpieces that leave users
            in awe.
          </PText>

          <Text>
            Hello, I’m Amel — a dynamic professional with more than 10 years of
            experience spanning a broad range of fields.
          </Text>
          <Text>
            I’ve journeyed from fine arts to design and programming, moving from
            fine arts to graphic design, UI/UX, and developing software and web
            applications. Beyond being a multi-disciplinary creator, I am
            interested in sustainability and circular economy, with passions for
            marine conservation and travel.
          </Text>
          <Text>
            I don't define myself by the work I’ve done in the past, but rather
            by the work I aim to do in the future. I’m driven by an endless
            desire to learn, face new challenges, and contribute to projects
            that make social impact.
          </Text>
          {/* <Text>
            I never settle for just having ideas; I feel an urgent need to act
            on them.
          </Text> */}
        </ContentWrapper>
        <Image src={Me} alt="portrait of myself" />
        <TextWrapper id="contact">
          <H4>Let's collaborate</H4>
          <TextColab>
            I'm always looking to collaborate on interesting and innovative
            projects, whether they’re improving an application's experience,
            building a design system or rethinking the entire shablam.
            <br />
            <br />
            <ContactWrapper>
              <p style={{ color: "#d3cfc0" }}>
                Find me on{" "}
                <Link
                  style={{ color: "inherit" }}
                  to="https://www.linkedin.com/in/amel-caballero-design/"
                >
                  LinkedIn
                </Link>{" "}
                or{" "}
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

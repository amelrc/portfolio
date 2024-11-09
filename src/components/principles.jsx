import styled from "styled-components";
import { device, Heading2, Subtitle } from "../generalStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  @media ${device.tablet} {
    width: 80%;
    margin: auto;
  }
  @media ${device.laptop} {
    width: 60%;
    margin: auto;
  }
`;

const WrapperHeading = styled.div`
  padding: 80px 0px 40px;
  width: 90%;
  margin: auto;

  @media ${device.tablet} {
    padding: 80px 0px;
  }
`;

const TextWrapper = styled.div`
  width: 90%;
  margin: auto;
  @media ${device.tablet} {
    width: 70%;
    margin: unset;
  }
  @media ${device.laptop} {
    width: 45%;
    margin: unset;
  }
`;

const H3 = styled.h3`
  font-family: "SF UI Display Thin";
  color: #49014f;
  font-size: 1.5rem;
  padding: 10px 0;
  @media ${device.tablet} {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  color: #230808;
  font-size: 1rem;
  font-family: SF UI Display Thin;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

const GreenBG = styled.span`
  position: absolute;
  background: radial-gradient(
      circle,
      rgb(114 255 43 / 43%) 0%,
      rgba(215, 38, 89, 0) 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 120%;
  height: 50%;
  bottom: 0;
`;

const AquaBG = styled.span`
  position: absolute;
  background: radial-gradient(
      circle,
      rgb(0 255 209 / 62%) 0%,
      rgba(215, 38, 89, 0) 50%
    )
    no-repeat;
  mix-blend-mode: saturation;
  width: 130%;
  height: 100%;
`;

const Principles = () => {
  const textData = [
    {
      title: "Know the crowd",
      text: "You, me, them -we all have different needs. Understanding how we think is important. Designing what we need is important. Focus on user data, then create.",
    },
    {
      title: "Consistency",
      text: "Don’t reinvent the wheel. Reuse proven design patterns that users recognise. Use familiar language to build comfort and understanding.",
    },
    {
      title: "Inclusivity",
      text: "Accessibility isn’t an afterthought -it’s essential from the start. Make a strong first impression by designing inclusively. Taking extra time to create a delightful experience can make a lasting impact.",
    },
    {
      title: "Functionality",
      text: "Your design should function seamlessly across all contexts; responsiveness goes beyond just screen size. Use technology to enhance the user experience.",
    },
  ];
  return (
    <Container>
      <WrapperHeading>
        <Heading2 style={{ color: "#3EBBFF", textAlign: "start" }}>
          Principles
        </Heading2>
        <Subtitle>Create products users will want to use</Subtitle>
      </WrapperHeading>

      <TextWrapper>
        {textData.map((item, index) => (
          <div key={index} style={{ padding: "30px 0" }}>
            <H3>{item.title}</H3>
            <Description>{item.text}</Description>
          </div>
        ))}
      </TextWrapper>
      <GreenBG />
      <AquaBG />
    </Container>
  );
};
export default Principles;

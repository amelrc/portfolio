import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../generalStyles";

export const Data = [
  {
    question: "Website",
    answer: ["The Side Studio", "Hidden Focus", "Blue Star Planning"],
  },
  {
    question: "Software",
    answer: ["Rubrics", "BSP"],
  },
  {
    question: "Branding",
    answer: ["Logos"],
  },
];

const AccordionSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

const AccordionWrapper = styled.div`
  // position: absolute;
  width: 90%;
  // margin-top: 25%;
  // z-index: 1;
  @media ${device.tablet} {
    width: 70%;
    margin-top: 8%;
  }
`;

const AccSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font: normal normal bold 40px/60px Kumbh Sans;
  color: #fdfde5;
  @media ${device.tablet} {
    font: normal normal bold 60px/80px Kumbh Sans;
  }
  @media ${device.laptopV} {
    font: normal normal bold 70px/88px Kumbh Sans;
  }
`;

const AccDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font: 24px/40px Kumbh Sans;
  color: #fdfde5;
  margin: 16px auto 16px 40px;
  div {
    color: #fdfde5;
    padding: 4px;
    height: 80px;
    &: hover {
      background: #fdfde5;
      color: #0d0b33;
      padding: 4px;
    }
  }
  @media ${device.tablet} {
    font: 32px/50px Kumbh Sans;
    margin: 24px auto 24px 40px;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) =>
    clicked === index ? setClicked(null) : setClicked(index);

  return (
    <AccordionSection>
      <AccordionWrapper>
        {/* this is good!! dont touch */}
        {/* {Data.map((item, index) => {
          return (
            <div key={index}>
              <AccSummary onClick={() => toggle(index)} key={index}>
                {item.question}
              </AccSummary>
              {clicked === index ? (
                <AccDetails>
                  {item.answer.map((a, i) => (
                    <Link
                      key={i}
                      style={{ textDecoration: "none" }}
                      to={`/${item.question.toLowerCase()}/${a
                        .replace(/\s/g, "-")
                        .toLowerCase()}`}
                    >
                      <p>{a}</p>
                    </Link>
                  ))}
                </AccDetails>
              ) : null}
            </div>
          );
        })} */}
        <AccDetails>
          <Link
            style={{ textDecoration: "none" }}
            to="/software/blue-star-planning"
          >
            <div>
              <h1>BSP</h1>
              <p
                style={{
                  font: "18px Kumbh Sans",
                  // color: "#FDFDE5",
                  margin: "8px auto",
                }}
              >
                Planning Software
              </p>
            </div>
          </Link>
        </AccDetails>
        <AccDetails>
          <Link style={{ textDecoration: "none" }} to="/software/rubrics">
            <div>
              <h1>Rubrics</h1>
              <p
                style={{
                  font: "18px Kumbh Sans",
                  // color: "#FDFDE5",
                  margin: "8px auto",
                }}
              >
                Grading System Application
              </p>
            </div>
          </Link>
        </AccDetails>
        {/* <AccDetails>
          <Link style={{ textDecoration: "none" }} to="/software/rubrics">
            <div>
              <h1>Studiate</h1>
              <p
                style={{
                  font: "18px Kumbh Sans",
                  // color: "#FDFDE5",
                  margin: "8px auto",
                }}
              >
                Teacher Administration Platform
              </p>
            </div>
          </Link>
        </AccDetails> */}
        {/* <AccDetails>
          <Link style={{ textDecoration: "none" }} to="/software/rubrics">
            <div>
              <h1>Qkit</h1>
              <p
                style={{
                  font: "18px Kumbh Sans",
                  // color: "#FDFDE5",
                  margin: "8px auto",
                }}
              >
                Recipe Finder
              </p>
            </div>
          </Link>
        </AccDetails> */}
        <AccDetails>
          <Link style={{ textDecoration: "none" }} to="/freelance">
            <div>
              <h1>Freelance</h1>
              <p
                style={{
                  font: "18px Kumbh Sans",
                  // color: "#FDFDE5",
                  margin: "8px auto",
                }}
              >
                Selected Freelance Projects
              </p>
            </div>
          </Link>
        </AccDetails>
        {/* <AccDetails>
          <Link style={{ textDecoration: "none" }} to="/software/rubrics">
            <div>
              <h1>Branding</h1>
            </div>
          </Link>
        </AccDetails> */}
      </AccordionWrapper>
    </AccordionSection>
  );
};

export default Accordion;

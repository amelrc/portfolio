import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { H3 } from "./principles";
import {
  CaseContainer,
  CaseDescription,
  CaseImageWrapper,
  CaseIntro,
  ProjectButton,
} from "../pages/Cases/caseStyles";

const CasePreview = ({ casesData }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <CaseContainer>
      {casesData.map((item, index) => (
        <div key={index} style={{ marginBottom: "8%" }}>
          <H3>{item.title}</H3>
          <CaseIntro>
            <CaseDescription>{item.description}</CaseDescription>

            {item.button && (
              <ProjectButton to={{ pathname: item.url, hash: item.hash }}>
                {item.button}
              </ProjectButton>
            )}
          </CaseIntro>

          <CaseImageWrapper>
            {item.images.map((src, index) => (
              <img key={index} src={src} alt={`${index + 1}`} />
            ))}
          </CaseImageWrapper>
        </div>
      ))}
    </CaseContainer>
  );
};

export default CasePreview;

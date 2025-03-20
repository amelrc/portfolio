import React from "react";

import { H3 } from "./principles";
import {
  CaseContainer,
  CaseDescription,
  CaseImageWrapper,
  CaseIntro,
  ProjectButton,
} from "../pages/Cases/caseStyles";
import LocationHash from "./locationHash";

const CasePreview = ({ casesData }) => {
  return (
    <>
      <LocationHash />
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
    </>
  );
};

export default CasePreview;

import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { ButtonContainer } from "../homeStyles";

import AllWork from "../../../images/AC_P_Image_trans_1x.webp";
import { BaseButton } from "../../../generalStyles";

const WorkExamples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight / 2); // Trigger when halfway in view
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount in case already in position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="work">
      <ButtonContainer ref={targetRef}>
        <LazyLoadImage
          id="work"
          style={{ marginTop: 200 }}
          src={AllWork}
          width="100%"
          height="auto"
          effect="blur"
          alt="all work"
        />

        {isVisible && (
          <BaseButton
            to={{ pathname: "/cases", hash: "#cases" }}
            style={{
              position: "sticky",
              bottom: "10%",
              backgroundColor: "#38ff6f",
            }}
          >
            view cases
          </BaseButton>
        )}
      </ButtonContainer>
    </div>
  );
};

export default WorkExamples;

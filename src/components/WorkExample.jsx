import { useState, useEffect, useRef } from "react";

import { ButtonContainer } from "../pages/Home/homeStyles";

import AllWork from "../images/AC_P_Image_trans_1x.png";
import { BaseButton } from "../generalStyles";

const WorkExamples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null); // Reference to the target element

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
    <div>
      <ButtonContainer ref={targetRef}>
        <img
          id="work"
          style={{ width: "100%", marginTop: 200 }}
          src={AllWork}
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

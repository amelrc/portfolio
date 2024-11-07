import React, { useEffect } from "react";

const YourComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      // Define the threshold value at which the background is considered dark
      const darkBackgroundThreshold = 200; // Adjust as needed

      const body = document.body;
      if (scrollPosition >= darkBackgroundThreshold) {
        body.style.setProperty("--light-text-color", "#000"); // Update to dark text color
      } else {
        body.style.setProperty("--light-text-color", "#fff"); // Update to light text color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="text">Your Text Here</div>;
};

export default YourComponent;

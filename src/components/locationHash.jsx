import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
};

export default LocationHash;

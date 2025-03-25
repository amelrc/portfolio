import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationHash = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash || window.location.hash) {
        const hash = location.hash || window.location.hash;
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Handle initial page load
    handleHashScroll();

    // Handle subsequent hash changes
    window.addEventListener("hashchange", handleHashScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [location]);

  return null; // No UI element needs to be rendered
};

export default LocationHash;

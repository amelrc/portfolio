import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home/home";
import AllCases from "./pages/Cases/allCases";
import HeartbeatBelgium from "./pages/Cases/heartbeat";
import TaxApp from "./pages/Cases/taxApp";
import DesignSystem from "./pages/Cases/designSystem";

import CustomCursor from "./components/CustomeCursor";
import NotFound from "./pages/notFound";
import SiteNavigation from "./components/SiteNavigation";
import ContentPage from "./pages/ContentPage";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      id="app"
      className="app-shell"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      {location.pathname !== "/" && <CustomCursor />}
      <SiteNavigation
        language={language}
        onLanguageChange={setLanguage}
        collapsed={menuCollapsed}
        onMenuToggle={() => setMenuCollapsed((collapsed) => !collapsed)}
      />

      <Routes>
        <Route path="/designsystem" element={<DesignSystem />} />
        <Route path="/taxapp" element={<TaxApp />} />
        <Route path="/heartbeat" element={<HeartbeatBelgium />} />
        <Route path="/cases" element={<AllCases />} />
        <Route path="/work" element={<AllCases />} />
        <Route path="/services" element={<ContentPage page="services" language={language} />} />
        <Route path="/contact" element={<ContentPage page="contact" language={language} />} />
        <Route path="/about" element={<ContentPage page="about" language={language} />} />
        <Route
          path="/"
          element={
            <Home
              language={language}
              menuCollapsed={menuCollapsed}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

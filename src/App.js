import { Route, Routes } from "react-router-dom";
import { NavTop, NavBot } from "./components/Nav";

import Home from "./pages/Home/home";
import AllCases from "./pages/Cases/allCases";
import HeartbeatBelgium from "./pages/Cases/heartbeat";
import TaxApp from "./pages/Cases/taxApp";
import DesignSystem from "./pages/Cases/designSystem";

import CustomCursor from "./components/CustomeCursor";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <div id="app" style={{ position: "relative", minHeight: "100vh" }}>
      <CustomCursor />
      <NavTop style={{ position: "fixed", top: 0, zIndex: 100 }} />

      <Routes>
        <Route path="/designsystem" element={<DesignSystem />} />
        <Route path="/taxapp" element={<TaxApp />} />
        <Route path="/heartbeat" element={<HeartbeatBelgium />} />
        <Route path="/cases" element={<AllCases />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <NavBot style={{ position: "fixed", bottom: 0, zIndex: 100 }} />
    </div>
  );
};
export default App;

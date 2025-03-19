import { Route, Routes } from "react-router-dom";
import { NavTop, NavBot } from "./components/Nav";
// import { motion } from "framer-motion";

// import BSP from "./pages/bspSoftware";
// import TestBG from "./pages/heroBG";
// import Menu from "./pages/menu";
// import About from "./pages/about";
// import Contact from "./pages/contact";
import Home from "./pages/Home/home";
// import Logos from "./pages/logos";
// import Rubrics from "./pages/rubrics";
// import Freelance from "./pages/freelance";
import CustomCursor from "./components/CustomeCursor";
import AllCases from "./pages/Cases/allCases";

import HeartbeatBelgium from "./pages/Cases/heartbeat";

import TaxApp from "./pages/Cases/taxApp";
import DesignSystem from "./pages/Cases/designSystem";

const App = () => {
  return (
    <div id="app" style={{ position: "relative", minHeight: "100vh" }}>
      <CustomCursor />
      <NavTop style={{ position: "fixed", top: 0, zIndex: 100 }} />

      <Routes>
        {/* <Route path="/test" element={<TestBG />} /> */}
        {/* <Route path="/software/blue-star-planning" element={BSP} />
        <Route path="/freelance" element={Freelance} />
        <Route path="/software/rubrics" element={<Rubrics />} />
      
        */}
        <Route path="/designsystem" element={<DesignSystem />} />
        <Route path="/taxapp" element={<TaxApp />} />
        <Route path="/heartbeat" element={<HeartbeatBelgium />} />
        <Route path="/cases" element={<AllCases />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <NavBot style={{ position: "fixed", bottom: 0, zIndex: 100 }} />
    </div>
  );
};
export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import * as React from "react";
import ReactGA from "react-ga4";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import App from "./App";

ReactGA.initialize("G-6T0V71VXFJ");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

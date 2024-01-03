import React from "react";
import ReactDOM from "react-dom/client";
import App from "./page/App";
import reportWebVitals from "./reportWebVitals";
import "./css/common.css";
import "./css/myreset.css";
import { BrowserRouter } from "react-router-dom";
import "./css/header.css"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

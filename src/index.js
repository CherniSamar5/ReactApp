import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// responsable sur le transfert du code app.js au index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


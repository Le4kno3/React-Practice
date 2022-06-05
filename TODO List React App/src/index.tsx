import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  //creates a new div with id = "root"
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* The React function "App" is run here */}
    <App />
  </React.StrictMode>
);

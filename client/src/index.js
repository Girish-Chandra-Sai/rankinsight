import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App";

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

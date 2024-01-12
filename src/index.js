import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import StarRating from "./Components/StarRating";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating
      maxRating={5}
      messages={["terrible", "Bad", "Okay", "Good", "Amazing!!!"]}
      defaultRating={2}
    />
  </React.StrictMode>
);

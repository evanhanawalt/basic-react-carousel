import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./Carousel";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Carousel
      className="max-w-3xl mx-auto"
      images={[
        "https://source.unsplash.com/random?landscape,mountain",
        "https://source.unsplash.com/random?landscape,cars",
        "https://source.unsplash.com/random?landscape,mountain",
        "https://source.unsplash.com/random?landscape,cars",
      ]}
    />
  </React.StrictMode>
);

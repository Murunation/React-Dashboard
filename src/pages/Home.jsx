import React from "react";
import "../style/home.css";

export default function Home(prop) {
  const {test} = prop
  return <div className="dashboard-content">
    <h1>{test[1].name}</h1>
    <p>{test[0].description}</p>
  </div>;
}

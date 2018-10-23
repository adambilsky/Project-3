import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
  <h4>Testing the Jumbotron</h4>
    {children}
  </div>
);

export default Jumbotron;

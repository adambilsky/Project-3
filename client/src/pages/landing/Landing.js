import React from "react";

const Landing = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
  <h4>Welcome to IMDBu</h4>
  <br/>
  <h5><a href="/schools">Browse Schools</a></h5>
  <br/>
  <h5><a href="/projects">View All Projects</a></h5>
    {children}
  </div>
);

export default Landing;

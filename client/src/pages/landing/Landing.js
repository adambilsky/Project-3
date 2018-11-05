import React from "react";

const Landing = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    <h4>Welcome to IMDBu!</h4><br />
    <p>IMDBu is the primary resource for cinematic and media arts students and university programs to establish an online presence within a larger film community. List your skills and projects, search for cast an crew members, and post links to your work!</p>
    <h5><a href="/schools">Browse Schools</a></h5><br />
    <h5><a href="/projects">View All Projects</a></h5>
    {children}
  </div>
);

export default Landing;

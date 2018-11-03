import React from "react";

// Redesign as necessary

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

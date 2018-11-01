import React from "react";

// Redesign as necessary

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

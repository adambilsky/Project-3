import React from "react";
import "./style.css";

/*  For a solid UX, the design of this Nav section will be important, 
    even if we don't implement all the features we plan to link to by
    11/10.

    - Drop-down menus for "student", "school", and "faculty"
    - Direct link to view/update profile 
    
*/
const Nav = () => (
  <nav>
    <div className="nav-wrapper .top-bar._fixed z-depth-2 black lighten-2">
      <a href="/" className="brand-logo">IMDBu</a>
      <ul id="nav-mobile" className="right hide-on-sm-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/schools">Browse Schools</a></li>
        <li><a href="/profile/5bce43b7f19b7490120a516a">Profile</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav;

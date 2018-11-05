import React from "react";
import "./style.css";

/*  For a solid UX, the design of this Nav section will be important, 
    even if we don't implement all the features we plan to link to by
    11/10.

    - Drop-down menus for "student", "school", and "faculty"
    - Direct link to view/update profile 
    
*/
const Nav = () => (
<<<<<<< HEAD
  <header>
    <nav>
      <div className="nav-wrapper orange lighten-2">
        <a href="/" className="brand-logo">IMDBu</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/main">Home</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>
    </nav>
  </header>
=======
  <nav>
    <div className="nav-wrapper .top-bar._fixed z-depth-2 black lighten-2">
      <a href="/" className="brand-logo">IMDBu</a>
      <ul id="nav-mobile" className="right hide-on-sm-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/profile/:id">Profile</a></li>
        <li><a href="/link">Logout</a></li>
      </ul>
    </div>
  </nav>
>>>>>>> f1220a0a4377badc723933bc79ded6d9b3f34bc9
);

export default Nav;

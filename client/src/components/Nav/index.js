import React from "react";


/*  For a solid UX, the design of this Nav section will be important, 
    even if we don't implement all the features we plan to link to by
    11/10.

    - Drop-down menus for "student", "school", and "faculty"
    - Direct link to view/update profile 
    
*/
const Nav = () => (
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">IMDBu</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav;

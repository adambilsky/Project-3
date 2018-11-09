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
        <ul id="nav-mobile" className="right hide-on-sm-and-down"></ul>
        <ul className="right hide-on-med-and-down">

          <li><a href="/profile/5bce43b7f19b7490120a516a">Profile</a></li>


          <ul id="dropdown1" className="dropdown-content">
            <li><a href="/schools">Add School</a></li>
            <li><a href="/schools">Browse Schools</a></li>

          </ul>

          <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Schools<i className="material-icons right">arrow_drop_down</i></a></li>
        
          
          <li><a href="/">Logout</a></li>
        </ul>

      </div>
    </nav>
  
)


export default Nav;

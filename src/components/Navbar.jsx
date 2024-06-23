import React from "react";
import "../css/nav.css";
const Navbar = () => {
  return (
    <div className="navholder">
      <div>
        <a>Mobobo</a>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li className="last-li">Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

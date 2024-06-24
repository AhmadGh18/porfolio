import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "../css/nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // Ensure menu is not open on large screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`navholder ${isMenuOpen ? "open" : ""}`}
        style={{
          transform: isMenuOpen ? "translateY(0)" : "translateY(-300px)",
        }}
      >
        <div>
          <a href="#">Mobobo</a>
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
      {isMobileView && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            height: "40px",
          }}
        >
          <FaBars
            className="fabur"
            onClick={handleClick}
            style={{
              color: isMenuOpen ? "black" : "white",
            }}
          />
          <span className="special">Portfolio</span>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
//netflix logo
import netflixLogo from "../../assets/netflix-logo.png";
// navbar style
import "./navbar.css";
const Navbar = () => {
  const [showBlack, setShowBlack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowBlack(true);
      } else {
        setShowBlack(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${showBlack && "nav-black"}`}>
      <img src={netflixLogo} alt="netflix logo" />
    </div>
  );
};

export default Navbar;

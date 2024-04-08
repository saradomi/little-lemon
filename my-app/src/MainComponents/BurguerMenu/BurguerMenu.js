import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./BurguerMenu.css";

function BurguerMenu() {
  function showSettings(event) {
    event.preventDefault();
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
      <Link
        to="/"
        onClick={() => {
          closeMenu();
          scrollTo("#hero");
        }}
        className="nav-item"
      >
        <span style={{ marginLeft: "20px" }}>Home</span>
      </Link>
      <Link 
        to="/little-lemon/booking"
        className="nav-item"
        ><span style={{ marginLeft: "20px" }}>Booking</span></Link>
      <Link
        onClick={() => {
          closeMenu();
          alert("Sorry, this feature is not yet ready.");
        }}
        className="nav-item"
      >
        <span style={{ marginLeft: "20px" }}>Order Online</span>
      </Link>
      <Link
        to="#"
        onClick={() => {
          closeMenu();
          scrollTo("#testimonials");
        }}
        className="nav-item"
      >
        <span style={{ marginLeft: "20px" }}>Testimonials</span>
      </Link>
      <Link
        to="#"
        onClick={() => {
          closeMenu();
          scrollTo("#story");
        }}
        className="nav-item"
      >
        <span style={{ marginLeft: "20px" }}>About</span>
      </Link>
    </Menu>
  );
}

export default BurguerMenu;
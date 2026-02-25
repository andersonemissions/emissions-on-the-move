import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../App.css"; // Ensure we have access to styles
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Book Now", path: "/book-now", isButton: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Emissions on the Move Logo"
            className="logo-icon"
            style={{ height: "50px", width: "auto" }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${
                location.pathname === link.path ? "active" : ""
              } ${link.isButton ? "nav-button" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`mobile-nav-item ${
              location.pathname === link.path ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

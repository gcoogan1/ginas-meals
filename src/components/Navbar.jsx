import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Meals By Gina</div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Desktop Nav Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={toggleMenu}>
            &times; {/* Close icon */}
          </button>
          <Link to="/" className="mobile-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/menu" className="mobile-link" onClick={toggleMenu}>
            Menu
          </Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Aurora.png";

import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
<nav
  className={`navbar
  ${scrolled ? "navbar-scrolled" : ""}
  ${!isHomePage ? "light-page" : ""}
`}
>
      <div className="logo-container">
  <img
    src={logo}
    alt="Aurora Spa Logo"
    className="logo-img"
  />

  <h2 className="logo-text">
    Aurora Spa
  </h2>
</div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "active-link" : ""
      }
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/services"
      className={({ isActive }) =>
        isActive ? "active-link" : ""
      }
    >
      Services
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "active-link" : ""
      }
    >
      About
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/gallery"
      className={({ isActive }) =>
        isActive ? "active-link" : ""
      }
    >
      Gallery
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive ? "active-link" : ""
      }
    >
      Contact
    </NavLink>
  </li>
</ul>

      <button
        className="book-btn"
        onClick={() => navigate("/contact")}
      >
        Book Now
      </button>
    </nav>
  );
}

export default Navbar;
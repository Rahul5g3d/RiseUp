import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">RiseUp</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink
            to="/"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lesson-learnt"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Lesson Learnt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/daily-study"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Daily Study
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book-studied"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Book Studied
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apology"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Apology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

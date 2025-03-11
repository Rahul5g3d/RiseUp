import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">RiseUp</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/lesson-learnt" activeClassName="active">
            Lesson Learnt
          </NavLink>
        </li>
        <li>
          <NavLink to="/daily-study" activeClassName="active">
            Daily Study
          </NavLink>
        </li>
        <li>
          <NavLink to="/book-studied" activeClassName="active">
            Book Studied
          </NavLink>
        </li>
        <li>
          <NavLink to="/apology" activeClassName="active">
            Apology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import "./Navbar.css";
import logoImage from './logo2.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const navItems = [
    { title: "Home", path: "/Home" },
    { title: "About", path: "/About" },
    { title: "Adopt", path: "/Adopt" },
    { title: "Blog", path: "/Blog" },
    { title: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="navbar navbar-default">
      <a href="/Home">
        <img
          src={logoImage}
          width="50"
          height="50"
          className="logo"
          alt="Logo"
        />
      </a>
      <ul className="nav-navbar">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`nav-item ${
                activeItem === item.title ? "active" : ""
              }`}
              onClick={() => setActiveItem(item.title)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

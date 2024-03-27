import React, { useState } from "react";
import "./Navbar.css";
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
      <div className="nav-brand">My Website</div>

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

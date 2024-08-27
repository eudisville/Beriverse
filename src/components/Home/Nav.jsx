import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import './Nav.css';
import Logo from "./assets/logo.png"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path} onClick={toggleMenu}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
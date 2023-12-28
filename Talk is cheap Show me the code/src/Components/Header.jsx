import React from 'react';
import {LOGO} from "../utils/contants"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO}
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
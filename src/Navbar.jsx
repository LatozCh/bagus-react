import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <img src="https://pngimg.com/d/nike_PNG9.png" alt="NIKE" className='logo' />
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;

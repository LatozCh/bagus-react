import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="https://pngimg.com/d/nike_PNG4.png" alt="Nike" className="footer-logo" />
        </div>
        <div className="footer-links">
          <div className="column">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="column">
            <h5>Support</h5>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div className="column">
            <h5>Shop</h5>
            <ul>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://www.svgrepo.com/show/521654/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://www.svgrepo.com/show/509274/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nike. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

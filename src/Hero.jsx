import React from 'react';
import './Hero.css';
import video from './assets/Video.mp4'

function Hero() {
  return (
    <div className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Step Into the Future</h1>
        <p className="hero-subtitle">Just do it with Nike</p>
        <a href="#shop" className="cta-button">Shop Now</a>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll</span>
        <svg className='scroll-arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </div>
  );
}

export default Hero;

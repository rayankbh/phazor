import React from 'react';
import '../styles/LandingPage.css'; 
import arrowImage from '../images/arrow.gif';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Phazor</h1>
      <p>Transform your audio files with dynamic, production-level filter presets.</p>
      <img src={arrowImage} alt="Scroll down arrow" class="scroll-arrow"></img>
    </div>
  );
}

export default LandingPage;

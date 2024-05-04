import React, { useRef, useEffect } from 'react';
import './App.css';
import GenreSelector from './components/GenreSelector';
import Banner from './components/Banner';
import LandingPage from './components/LandingPage';
import FileUploader from './components/FileUploader';
import FluidSimulation from './components/FluidSimulation';

function App() {
  const landingPageRef = useRef(null);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = lastKnownScrollPosition;
          const landingPageContent = landingPageRef.current;
          const opacity = 1 - scrollPosition / (window.innerHeight * 0.5);
          const scale = 1 + (scrollPosition * 1.1) / (window.innerHeight * 0.3);
          const blur = (scrollPosition / (window.innerHeight * 0.5)) * 5;

          if (landingPageContent) {
            landingPageContent.style.opacity = Math.max(0, opacity);
            landingPageContent.style.transform = `scale(${Math.min(2, scale)})`;
            landingPageContent.style.filter = `blur(${Math.min(10, blur)}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Banner />

      <div className="page">
        <div className="page-section landing-page">
          <div className="landing-page-content" ref={landingPageRef}>
            <LandingPage />
          </div>
        </div>
        <div className="page-section genre-selector">
          <GenreSelector />
        </div>
      </div>
    </div>
  );
}

export default App;
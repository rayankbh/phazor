import React, { useState } from 'react';
import { useTrail, animated as a } from '@react-spring/web';
import '../styles/LandingPage.css';
import arrowImage from '../images/arrow.gif';
import logo from '../images/logo.png';
import heroImage from '../images/alien.png';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="landing-page-content">
      {trail.map(({ height, x, ...style }, index) => (
        <a.div key={index} className="trailsText" style={{ ...style, transform: x.to(x => `translate3d(0,${x}px,0)`) }}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function LandingPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="landing-page" onClick={() => setOpen(!open)}>
      
      <img src={logo} alt="Logo" className="landing-logo" />
      <Trail open={open}>
        <h1>Welcome to Phazor</h1>
        <p>Transform your audio files with dynamic, production-level filter presets.</p>
        <img src={arrowImage} alt="Scroll down arrow" className="scroll-arrow" />
      </Trail>
    </div>
  );
}

export default LandingPage;

import React, { useEffect, useRef } from 'react';

const FluidSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://paveldogreat.github.io/WebGL-Fluid-Simulation/script.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default FluidSimulation;
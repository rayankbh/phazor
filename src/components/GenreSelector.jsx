import React, { useState, useRef } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import '../styles/GenreSelector.css';
import AudioPlayer from './FileUploader';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function GenreSelector() {
  const [genre, setGenre] = useState('');
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const genres = ['Rock', 'Pop', 'Jazz', 'Classical', 'Electronic', 'Rap', 'Country', 'Indie', 'Funk'];
  const props = useSpring({ to: { backgroundColor: genre ? getColorForGenre(genre) : '#181818' }, from: { backgroundColor: 'white' } });

  const [trail, api] = useTrail(3, i => ({ xy: [0, 0], config: i === 0 ? fast : slow }));
  const ref = useRef(null);

  const handleMouseMove = e => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    api.start({ xy: [x, y] });
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleSubmit = () => {
    setShowAudioPlayer(true);
  };

  if (showAudioPlayer) {
    return <AudioPlayer genre={genre} />;
  }

  return (
    <animated.div className="container" style={props}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div ref={ref} className="hooksMain" onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
      <div className="GenreSelector">
        <label htmlFor="genre-select" className="label">
          Let's start by picking the sound you want:
        </label>
        <select id="genre-select" value={genre} onChange={handleGenreChange} className="select">
          <option value="">Select a genre</option>
          {genres.map((genreOption) => (
            <option key={genreOption} value={genreOption}>
              {genreOption}
            </option>
          ))}
        </select>
      </div>
      {genre && (
        <div className="SubmitButtonContainer">
          <button className="SubmitButton" onClick={handleSubmit}>
            Confirm Selection
          </button>
        </div>
      )}
    </animated.div>
  );
}

// Helper function to get color based on genre
function getColorForGenre(genre) {
  const genreColors = {
    Rock: '#122D40',
    Pop: '#5A3498',
    Jazz: '#53305F',
    Classical: '#073D74',
    Electronic: '#254155',
    Rap: '#3B2244',
    Country: '#3D7EA4',
    Indie: '#A72559',
    Funk: '#2B4678'
  };
  return genreColors[genre] || 'black';
}

export default GenreSelector;
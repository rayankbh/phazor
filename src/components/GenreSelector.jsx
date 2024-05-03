import React, { useState } from 'react';
import '../styles/GenreSelector.css';

function GenreSelector() {
  const [genre, setGenre] = useState('');
  const genres = ['Rock', 'Pop', 'Jazz', 'Classical', 'Electronic', 'Hip Hop', 'Country'];

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div className="container">
      <div className="GenreSelector">
        <label htmlFor="genre-select" className="label">
          Let's start by picking a sound you want:
        </label>
        <select
          id="genre-select"
          value={genre}
          onChange={handleGenreChange}
          className="select"
        >
          <option value="">Select a genre</option>
          {genres.map((genreOption) => (
            <option key={genreOption} value={genreOption}>
              {genreOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default GenreSelector;
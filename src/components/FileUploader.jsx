import React, { useState, useRef } from 'react';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const audioRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="AudioPlayer">
      <input type="file" accept=".mp3" onChange={handleFileChange} />
      {audioFile && (
        <div>
          <audio ref={audioRef} src={URL.createObjectURL(audioFile)} />
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
import React, { useState } from "react";
import "./common.css"; // Create this CSS file for styling

const songs = [
  // Your list of songs with details (title, artist, album, image, etc.)
  // Example:
  {
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    imgSrc: "./path/to/your-song-image.jpg",
    src: "./path/to/your-song.mp3",
  },
  // Add more songs as needed
];

const MusicCard = ({ song }) => {
  return (
    <div className="music-card">
      <img src={song.imgSrc} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <p>{song.album}</p>
      {/* Add audio player or other components as needed */}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      {songs.map((song, index) => (
        <MusicCard key={index} song={song} />
      ))}
    </div>
  );
};

export default App;

import React from "react";
import { updateActiveStatus } from "../utility";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  id,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    updateActiveStatus(songs, id, setSongs);
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

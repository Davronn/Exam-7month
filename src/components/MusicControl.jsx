import React from "react";
import ReactPlayer from "react-player";
import "../scss/music_control.scss"

function MusicControl({ playingTrack, isPlaying }) {
  return (
    <div className="music_control">
      <ReactPlayer
        url={playingTrack}
        controls
        playing={isPlaying}
        width="500px"
        height="30px"
        style={{
          display: "inline-block",
          zIndex:"10",
        }}
      />
    </div>
  );
}

export default MusicControl;

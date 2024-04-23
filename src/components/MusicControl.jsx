import React from "react";
import "../scss/music_control.scss";

function MusicControl() {
  return (
    <div className="music_control">
      <div className="music_pleyer">
        <h1>footer</h1>
        <audio controls>
          <source src="test.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default MusicControl;

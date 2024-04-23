import React, { useEffect } from "react";
import "../scss/Playlist.scss";
import { FetchZustand } from "../app/FetchZustand";
import { back, like_playlist, play, prev } from "../assets/imgs";

function PlaylistDetelis() {
  const { PlaylistDetelis } = FetchZustand();

  const TruncateText = ({ text = "Text not provided", maxLength }) => {
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return <span>{truncatedText}</span>;
  };

  return (
    <div className="playlist_detelis">
      <div className="actions_playlist">
        <div className="imgs">
          <img src={back} alt="" />
          <img src={prev} alt="" />
        </div>
      </div>
      <div className="playlist_info">
        <div className="playlist_img">
          <img
            src={PlaylistDetelis.images && PlaylistDetelis.images[0].url}
            alt=""
          />
        </div>
        <div className="playlist_text">
          <p className="public">PUBLIC PLAYLIST</p>
          <h1>
            <TruncateText text={PlaylistDetelis.name} maxLength={8} />
          </h1>
          <p className="dec">{PlaylistDetelis.description}</p>
          <p className="dec">Made for davedirect3 . 34 songs, 2hr 01 min</p>
        </div>
      </div>
      <div className="bg-black">
        <div className="music_actions">
          <div className="actions_m">
            <img src={play} alt="" />
            <img src={like_playlist} alt="" />
          </div>
          <div className="pusk"></div>
        </div>
        <div className="music_actions">
          <div className="actions_m">
            <img src={play} alt="" />
            <img src={like_playlist} alt="" />
          </div>
          <div className="pusk"></div>
        </div>
        <div className="music_actions">
          <div className="actions_m">
            <img src={play} alt="" />
            <img src={like_playlist} alt="" />
          </div>
          <div className="pusk"></div>
        </div>
        <div className="music_actions">
          <div className="actions_m">
            <img src={play} alt="" />
            <img src={like_playlist} alt="" />
          </div>
          <div className="pusk"></div>
        </div>
        <div className="music_actions">
          <div className="actions_m">
            <img src={play} alt="" />
            <img src={like_playlist} alt="" />
          </div>
          <div className="pusk"></div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetelis;

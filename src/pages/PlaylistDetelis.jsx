import React, { useEffect } from "react";
import "../scss/Playlist.scss";
import { FetchZustand } from "../app/FetchZustand";
import {
  back,
  clock,
  dowload,
  like_playlist,
  others,
  play,
  prev,
  pusk,
} from "../assets/imgs";

function PlaylistDetelis() {
  const { PlaylistDetelis } = FetchZustand();
  console.log(PlaylistDetelis);

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
            <img src={dowload} alt="" />
            <img src={others} alt="" />
          </div>
          <div className="pusk">
            <img src={pusk} alt="" />
          </div>
        </div>
        <div className="tracks">
          <table>
            <thead>
              <tr>
                <td className="index">#</td>
                <td className="name">TITLE</td>
                <td className="albom_name">ALBUM</td>
                <td className="reels">DATA ADDED</td>
                <td className="duration_ms">
                  <img src={clock} alt="" />
                </td>
              </tr>
            </thead>
            <tbody>
              {PlaylistDetelis.tracks.items.map((item, index) => (
                <tr key={index}>
                  <td className="index">{index + 1}</td>
                  <td className="name">
                    <img src={item.track.album.images[0].url} alt="" />
                    <span>
                      <TruncateText text={item.track.name} maxLength={15} />
                      <br></br>
                      {item.track.album.release_date}
                    </span>
                  </td>
                  <td className="albom_name">{item.track.album.name}</td>
                  <td className="reels">{item.track.album.release_date}</td>
                  <td className="duration_ms">{item.track.duration_ms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetelis;

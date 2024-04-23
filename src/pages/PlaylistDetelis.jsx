import React, { useEffect, useState } from "react";
import "../scss/Playlist.scss";
import { FetchZustand } from "../app/FetchZustand";
import {
  back,
  clock,
  dowload,
  like_playlist,
  others,
  play,
  play_music,
  prev,
  pusk,
} from "../assets/imgs";
import ReactPlayer from "react-player";

function PlaylistDetelis() {
  const { PlaylistDetelis } = FetchZustand();
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, [playingTrack]);

  const playTrack = (track) => {
    setPlayingTrack(track);
    setIsPlaying(!isPlaying);
    console.log(track);
  };

  const TruncateText = ({ text = "Text not provided", maxLength }) => {
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return <span>{truncatedText}</span>;
  };

  const formatDuration = (duration_ms) => {
    const totalSeconds = Math.floor(duration_ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
                <td className="like_td"></td>
                <td className="reels">DATA ADDED</td>
                <td className="duration_ms">
                  <img src={clock} alt="" />
                </td>
              </tr>
            </thead>
            <tbody>
              {PlaylistDetelis.tracks &&
                PlaylistDetelis.tracks.items.map((item, index) => (
                  <tr className="tr" key={index}>
                    <td className="index">
                      <span className="wrapper">
                        <span className="box1">{index + 1}</span>
                        <span className="box2">
                          <img
                            src={play_music}
                            alt=""
                            onClick={() => playTrack(item.track.preview_url)}
                          />
                        </span>
                      </span>
                    </td>
                    <td className="name">
                      <img src={item.track.album.images[0].url} alt="" />
                      <span>
                        <TruncateText text={item.track.name} maxLength={15} />
                        <br></br>
                        <span className="art_name">
                          {item.track.album.artists[0].name}
                        </span>
                      </span>
                    </td>
                    <td className="albom_name">
                      <TruncateText
                        text={item.track.album.name}
                        maxLength={8}
                      />
                    </td>
                    <td className="like_td">Like</td>
                    <td className="reels">{item.track.album.release_date}</td>
                    <td className="duration_ms">
                      {formatDuration(item.track.duration_ms)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {playingTrack && (
            <ReactPlayer
              url={playingTrack}
              controls
              playing={isPlaying}
              width="0"
              height="0"
              style={{ display: "block" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetelis;

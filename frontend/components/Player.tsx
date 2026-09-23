"use client";

import { useRef, useState } from "react";
import { station } from "@/lib/content";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play().catch(() => {
        /* stream unavailable in this environment */
      });
      setPlaying(true);
    }
  }

  return (
    <div className="radio_player" data-player-type="shortcode">
      <div className="qodef-shortcode qodef-m qodef-podcast-player-sc qodef-layout--standard qodef-progress-in-modal--no qodef-skin--light">
        <div className="qodef-m-player-box">
          <div className="qodef-e-image">
            <img src={station.logo} alt="MOR Radio live" width={120} height={120} loading="lazy" />
          </div>
          <div className="qodef-m-box-info">
            <div className="qodef-m-title-area">
              <span className="qodef-e-title entry-title qodef-podcast-title">Live Stream</span>
            </div>
            <div className="qodef-m-box-bottom">
              <p className="qodef-m-text">{playing ? "On air now" : "Listen Live"}</p>
            </div>
          </div>
          <div className="qodef-m-info-right">
            <div className="qodef-podcast-player" data-playing-id="live">
              <audio ref={audioRef} preload="none">
                <source src={station.streamUrl} type="audio/mpeg" />
              </audio>
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Pause live stream" : "Play live stream"}
                className="qodef-m-play"
              >
                <span className="qodef-m-play-inner">{playing ? "Pause" : "Play"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

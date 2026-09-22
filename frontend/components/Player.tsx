"use client";

import { useRef, useState } from "react";
import { station, schedule } from "@/lib/content";

function currentShow() {
  const now = new Date();
  const day = schedule[(now.getDay() + 6) % 7]; // Monday-first
  const slots = day.slots;
  let live = slots[0];
  for (const s of slots) {
    if (s.time <= now.toTimeString().slice(0, 5)) live = s;
  }
  return live;
}

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const live = currentShow();

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
    <div className="grain relative overflow-hidden rounded-lg panel-border p-6 sm:p-8" style={{ background: "var(--panel)" }}>
      <audio ref={audioRef} src={station.streamUrl} preload="none" />
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--accent-2)" }}>
            {station.freq} &middot; on air now
          </p>
          <p className="font-display mt-1 text-2xl" style={{ color: "var(--paper)" }}>
            {live.show}
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            with {live.host}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause stream" : "Play stream"}
            className="knob flex h-16 w-16 items-center justify-center text-lg"
            style={{ color: "var(--accent-2)" }}
          >
            {playing ? (
              <span aria-hidden className="flex gap-1">
                <span className="h-6 w-1.5" style={{ background: "currentColor" }} />
                <span className="h-6 w-1.5" style={{ background: "currentColor" }} />
              </span>
            ) : (
              <span
                aria-hidden
                className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent"
                style={{ borderLeftColor: "currentColor" }}
              />
            )}
          </button>
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--paper)" }}>
              {playing ? "Streaming" : "Tap to tune in"}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              {station.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

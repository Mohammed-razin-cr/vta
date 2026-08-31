"use client";

import { useEffect, useRef, useState } from "react";

const SHOW_HERO_BG_VIDEO = false;

const HERO_BG_VIDEOS = [
  "/assets/videos/learners..mp4",
];

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!SHOW_HERO_BG_VIDEO) return null;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (motionPreference.matches || document.hidden) {
        video.pause();
      } else {
        video.muted = true;
        void video.play().catch(() => undefined);
      }
    };

    video.muted = true;
    syncPlayback();

    motionPreference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      motionPreference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [currentVideoIndex]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      <video
        ref={videoRef}
        key={HERO_BG_VIDEOS[currentVideoIndex]}
        src={HERO_BG_VIDEOS[currentVideoIndex]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setIsLoaded(true)}
        onEnded={() => {
          setCurrentVideoIndex((prev) => (prev + 1) % HERO_BG_VIDEOS.length);
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-75 md:opacity-85" : "opacity-0"
        }`}
        style={{
          filter: "brightness(0.95) contrast(1.08) saturate(1.05)",
        }}
      />
      {/* Subtle translucent overlays ensuring high video visibility + text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-paper/90 via-paper/60 to-paper/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper/90" />
    </div>
  );
}

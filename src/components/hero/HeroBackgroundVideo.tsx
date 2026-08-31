"use client";

import { useEffect, useRef, useState } from "react";

const HERO_BG_VIDEOS = [
  "/assets/videos/Enhanced_Cinematic_Video_Promp.mp4",
  "/assets/videos/Create_an_ultra_photorealistic.mp4",
  "/assets/videos/Enhanced_Standalone_Video_Prom.mp4",
];

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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
          isLoaded ? "opacity-25" : "opacity-0"
        }`}
        style={{
          filter: "brightness(0.9) contrast(1.1) saturate(0.95)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Editorial Gradients to guarantee 100% text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-paper/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-transparent to-paper" />
    </div>
  );
}

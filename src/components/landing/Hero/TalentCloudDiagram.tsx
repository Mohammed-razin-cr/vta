"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const INTRO_VIDEO = "/assets/aura-farm.mp4";
const CONTINUOUS_VIDEO = "/assets/aura-farm2.mp4";

export function TalentCloudDiagram() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSource, setVideoSource] = useState(INTRO_VIDEO);
  const [videoReady, setVideoReady] = useState(false);
  const isContinuousVideo = videoSource === CONTINUOUS_VIDEO;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = true;
    const syncPlayback = () => {
      if (motionPreference.matches || document.hidden || !isVisible) {
        video.pause();
        if (motionPreference.matches) video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.08 },
    );

    video.load();
    syncPlayback();
    observer.observe(video);
    motionPreference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [videoSource]);

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-paper"
      aria-busy={!videoReady}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "var(--paper)",
        WebkitMaskImage:
          "radial-gradient(ellipse 72% 66% at 50% 52%, #000 42%, rgba(0,0,0,.9) 58%, transparent 92%)",
        maskImage:
          "radial-gradient(ellipse 72% 66% at 50% 52%, #000 42%, rgba(0,0,0,.9) 58%, transparent 92%)",
      }}
    >
      <Image
        src="/assets/talent-cloud-poster.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="(max-width: 1023px) calc(100vw - 90px), 670px"
        className="object-cover mix-blend-multiply transition-opacity duration-300"
        style={{
          opacity: videoReady ? 0 : 1,
          transform: "translateY(-0.75rem) scale(1.21)",
          filter: "brightness(1.12) contrast(1.14) saturate(1.04)",
        }}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply transition-opacity duration-300"
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
          opacity: videoReady ? 1 : 0,
          visibility: videoReady ? "visible" : "hidden",
          transform: "translateY(-0.75rem) scale(1.21)",
          filter: "brightness(1.16) contrast(1.2) saturate(1.08)",
        }}
        src={videoSource}
        autoPlay
        loop={isContinuousVideo}
        muted
        playsInline
        preload="auto"
        onPlaying={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
        onEnded={() => {
          setVideoSource(CONTINUOUS_VIDEO);
        }}
        aria-label="VOC Technical Academy automotive technology showcase"
      >
        Your browser does not support embedded video.
      </video>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      className="relative h-full w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse 72% 66% at 50% 52%, #000 42%, rgba(0,0,0,.9) 58%, transparent 92%)",
        maskImage:
          "radial-gradient(ellipse 72% 66% at 50% 52%, #000 42%, rgba(0,0,0,.9) 58%, transparent 92%)",
      }}
    >
      <Image
        src="/assets/talent-cloud-poster.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 90vw, 50vw"
        aria-hidden="true"
        className={`object-cover transition-opacity duration-300 ${videoReady ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={videoRef}
        className={`relative h-full w-full -translate-y-3 scale-[1.21] object-cover mix-blend-multiply transition-opacity duration-300 [filter:brightness(1.16)_contrast(1.2)_saturate(1.08)] ${videoReady ? "opacity-100" : "opacity-0"}`}
        src={videoSource}
        autoPlay
        loop={isContinuousVideo}
        muted
        playsInline
        preload="auto"
        poster="/assets/talent-cloud-poster.webp"
        onLoadedData={() => setVideoReady(true)}
        onEnded={() => {
          setVideoReady(false);
          setVideoSource(CONTINUOUS_VIDEO);
        }}
        aria-label="VOC Technical Academy automotive technology showcase"
      >
        Your browser does not support embedded video.
      </video>
    </div>
  );
}

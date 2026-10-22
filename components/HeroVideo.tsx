"use client";

import { useEffect, useRef, useState } from "react";

// Landscape clip on desktop, portrait clip on phones.
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const phone = window.matchMedia("(max-width: 700px)");
    const pick = () => setSrc(phone.matches ? "hero-mobile" : "hero");
    pick();
    phone.addEventListener("change", pick);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    return () => phone.removeEventListener("change", pick);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !src) return;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [playing, src]);

  return (
    <>
      {src && (
        <video
          key={src}
          ref={ref}
          src={`/assets/${src}.mp4`}
          poster={`/assets/${src}-poster.jpg`}
          autoPlay={playing}
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}
      <button
        className="vid-toggle"
        type="button"
        aria-label={`${playing ? "Pause" : "Play"} background video`}
        onClick={() => setPlaying((p) => !p)}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
}

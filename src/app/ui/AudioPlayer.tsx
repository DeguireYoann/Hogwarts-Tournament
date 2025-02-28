"use client";

import { useState, useRef, useEffect } from "react";
import AudioIcon from "./Icons/AudioIcon";
import AudioMutedIcon from "./Icons/AudioMutedIcon";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Autoplay bloqué:", err));
    }
  }, []);

  return (
    <div className="block">
      <button
        onClick={togglePlay}
        className="flex justify-center items-center text-center w-5 h-5 aspect-square rounded-full"
      >
        {isPlaying ? <AudioIcon/> : <AudioMutedIcon/>}
      </button>
      <audio ref={audioRef} src="/audio/music.mp3" />
    </div>
  );
}

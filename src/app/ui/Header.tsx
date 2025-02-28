"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 px-6 py-4 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between">
        <Link href="/">Accueil</Link>
        <Link href="/points">Points</Link>
        <AudioPlayer />
      </div>
    </div>
  );
}

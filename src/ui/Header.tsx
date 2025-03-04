"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import { useAuth } from "@/context/Auth";
import Logo from "./Icons/LogoIcon";

export default function Header() {
  const { user, logout } = useAuth();
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
          : "bg-black text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-2 items-center justify-center">
          <li>
            <Link href="/" className="hover:underline">Accueil</Link>
          </li>
          <li>
            <Link href="/points" className="hover:underline">Points</Link>
          </li>
          <li>
            {user ? (
              <button onClick={logout} className="hover:underline cursor-pointer">Déconnexion</button>
            ): (
              <Link href="/login" className="hover:underline">Connexion</Link>
            )}
          </li>
        </ul>
        <AudioPlayer />
      </div>
    </div>
  );
}

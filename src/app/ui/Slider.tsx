"use client";

import { useHogwarts } from "@/app/context/Hogwarts";
import { useState } from "react";

export default function HouseSection() {
  const { houses } = useHogwarts();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [house, setHouse] = useState<'gryffondor'|'slytherin'>("gryffondor");

  // Définition des couleurs et images en fonction de la maison
  const houseData: Record<string, { images: string[] }> = {
    gryffondor: {
      images: ["/images/gryffondor01.png", "/images/gryffondor02.png", "/images/gryffondor03.png"],
    },
    slytherin: {
      images: ["/images/slytherin01.png", "/images/slytherin02.png", "/images/slytherin03.png"],
    },
  };

  const imgStyles = ['top-[-50px] left-1.5 ', 'bottom-[-50px] left-2/5', 'top-[30px] right-1.5'];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <div className="relative flex w-full h-[80vh] justify-center items-center md:space-x-5" onMouseMove={handleMouseMove}>
      <div
        className={`relative flex justify-center h-full items-center sm:w-full md:w-1/2 p-6 ${house === 'gryffondor' ? 'bg-red-800': 'bg-green-800'} shadow-lg rounded-md`}
        style={{
          backgroundImage: 'url("/images/texture.jpg")',
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <h2 className="font-extrabold text-6xl z-50 text-white">{houses[house]} points</h2>
        <img src={`/images/${house}-logo.png`} className="absolute opacity-25 z-20" />
      </div>

      <div className="absolute hidden md:flex flex-col m-auto space-y-5 z-50">
          <button
            onClick={() => setHouse('gryffondor')}
            className="relative w-[75px] h-[75px] bg-red-800 border-red-800 overflow-clip rounded-full p-2 flex justify-center items-center border-4"
          >
            <img src={`/images/gryffondor-logo.png`} className={`absolute min-w-[100px] top-0 ${house === "gryffondor" ? "opacity-30": "opacity-85"}`} />
          </button>
          <button
            onClick={() => setHouse('slytherin')}
            className="relative w-[75px] h-[75px] bg-green-800 border-green-800 overflow-clip rounded-full p-2 flex justify-center items-center border-4"
          >
            <img src={`/images/slytherin-logo.png`} className={`absolute min-w-[100px] top-0 ${house === "slytherin" ? "opacity-30": "opacity-85"}`} />
          </button>
      </div>

      <div className="relative justify-center items-center hidden h-full md:w-1/2 md:flex p-6 bg-gradient-to-bl from-white to-gray-300 shadow-lg rounded-md">
        <p className="font-bold text-2xl text-gray-900 mx-5 z-40">
          {house === "gryffondor"
            ? "Gryffondor valorise le courage, la bravoure et la détermination."
            : "Serpentard valorise la ruse, l'ambition et la détermination."}
        </p>
        {houseData[house].images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`absolute z20 ${imgStyles[index]}`}
            style={{
              transform: `translate(${offset.x / (index + 1)}px, ${offset.y / (index + 1)}px)`,
              transition: "transform 0.1s linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}

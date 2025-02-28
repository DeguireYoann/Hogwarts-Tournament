"use client";

import { useAuth } from "@/app/context/Auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useHogwarts } from "../context/Hogwarts";

export default function Page() {
    const { user } = useAuth();
    const { houses, addPoints } = useHogwarts();
  
    const router = useRouter();
  

    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);
    
    if (!user) return null;

    const handleAddPoints = async (house: "gryffondor" | "slytherin") => {
        await addPoints(house, 10);
    };

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold">Compétition Harry Potter 🧙‍♂️</h1>
      <div className="mt-5 space-y-3">
        <p>🦁 Gryffondor: {houses.gryffondor} points</p>
        <p>🐍 Serpentard: {houses.slytherin} points</p>
      </div>
      <div className="mt-5 space-x-2">
        <button onClick={() => handleAddPoints("gryffondor")} className="p-2 bg-red-500 text-white">
          +10 Gryffondor
        </button>
        <button onClick={() => handleAddPoints("slytherin")} className="p-2 bg-green-500 text-white">
          +10 Serpentard
        </button>
      </div>
    </div>
  );
}

"use client";

import { useAuth } from "@/context/Auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useHogwarts } from "../../context/Hogwarts";
import PointsBanner from "@/ui/PointsBanner";

export default function Page() {
    const { user, isAdmin } = useAuth();
    const { addPoints } = useHogwarts();
  
    const router = useRouter();
  

    useEffect(() => {
      if (!user && !isAdmin) {
        router.push("/login");
      }
    }, [user, isAdmin, router]);
    
    if (!user) return null;

    const handleAddPoints = async (house: "gryffondor" | "slytherin") => {
        await addPoints(house, 10);
    };

    return (
      <div className="p-5 text-center mt-[200px]">
        <PointsBanner />
          {user && isAdmin && (
            <div className="mt-5 space-x-2">
              <button onClick={() => handleAddPoints("gryffondor")} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-200 text-red-800 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-800 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">+10 Gryffondor</span>
              </button>
                
              <button onClick={() => handleAddPoints("slytherin")} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-green-200 text-green-800 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-800 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">+10 Serpentard</span>
              </button>
            </div>
          )}
        </div>
    );
    
}

"use client"

import { useHogwarts } from "@/context/Hogwarts"
import { useEffect, useState } from "react";

export default function PointsBanner() {
    const {houses} = useHogwarts();
    const [winningHouse, setWinningHouse] = useState("");
    
    useEffect(()=> {
        const winner = houses.gryffondor > houses.slytherin ?
        "Gryffondor":
        "Serpentard"
        setWinningHouse(winner);
    }, [houses])

    return(
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl"><strong>{winningHouse}</strong> est en avance</h2>
            <div className="flex flex-col h-[10em] w-full md:flex-row my-6 shadow-lg">
                <div className="flex justify-center items-center flex-1 bg-[url(/images/gryffondor-logo.png)] bg-no-repeat bg-left bg-contain bg-red-900">
                    <p className="text-3xl text-white">
                        {houses.gryffondor}
                    </p>
                </div>
                <div className="flex justify-center items-center flex-1 bg-[url(/images/slytherin-logo.png)] bg-no-repeat bg-right bg-contain bg-green-900">
                    <p className="text-3xl text-white">
                        {houses.slytherin}
                    </p>
                </div>
            </div>
        </div>
    )
}
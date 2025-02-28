"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface HousesPoints {
  gryffondor: number;
  slytherin: number;
}

interface HogwartsState {
  houses: HousesPoints;
  getPoints: () => Promise<void>;
  addPoints: (house: "gryffondor" | "slytherin", points: number) => Promise<void>;
}

const HogwartsContext = createContext<HogwartsState>({
  houses: { gryffondor: 0, slytherin: 0 },
  getPoints: async () => {},
  addPoints: async () => {},
});

export const HogwartsProvider = ({ children }: { children: React.ReactNode }) => {
  const [houses, setHouses] = useState<HousesPoints>({ gryffondor: 0, slytherin: 0 });

  const getPoints = async () => {
    try {
        const response = await fetch("/api/points");
        const data = await response.json();
        setHouses(data);
    } catch(error) {
        throw new Error(`Error while loadings houses points: ${error}`)
    }
  };

  const addPoints = async (house: "gryffondor" | "slytherin", points: number) => {
    try {
        await fetch("/api/points", {
            method: 'POST',
            body: JSON.stringify({
                house,
                points,
            })
        });
        await getPoints();
    } catch(error) {
        throw new Error(`Error while updating houses points: ${error}`)
    }
  };

  useEffect(() => {
    getPoints();
  }, []);

  return (
    <HogwartsContext.Provider value={{ houses, getPoints, addPoints }}>
      {children}
    </HogwartsContext.Provider>
  );
};

export const useHogwarts = () => useContext(HogwartsContext);

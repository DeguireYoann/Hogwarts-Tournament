"use client";

import Link from 'next/link';
import { useHogwarts } from './context/Hogwarts';

export default function Home() {

  const { houses } = useHogwarts();

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold">Compétition Harry Potter 🧙‍♂️</h1>
      <div className="mt-5 space-y-3">
        <p>🦁 Gryffondor: { houses.gryffondor } points</p>
        <p>🐍 Serpentard: { houses.slytherin } points</p>
      </div>
      <Link href="/points">Points</Link>
    </div>
  );
}

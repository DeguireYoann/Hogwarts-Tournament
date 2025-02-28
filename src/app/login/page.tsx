"use client";

import { useAuth } from "@/app/context/Auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { user } = useAuth();
    const router = useRouter();

    const { login } = useAuth();


    useEffect(() => {
    if (user) {
        router.push("/points");
    }
    }, [user, router]);
    
  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold">Connexion 🔑</h1>
      <button onClick={login} className="mt-5 p-2 bg-blue-500 text-white rounded">
        Se connecter avec Google
      </button>
    </div>
  );
}

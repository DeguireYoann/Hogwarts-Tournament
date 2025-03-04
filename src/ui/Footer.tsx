"use client"
import Link from "next/link";
import Logo from "./Icons/LogoIcon";
import { useAuth } from "@/context/Auth";

export default function Footer() {
    const { user, logout } = useAuth();
    return (
        <footer className="bg-white dark:bg-gray-900 mt-4 py-4">
            <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <img src="/images/footer-monster.png" className="bounce-animation" />
            <q className="text-gray-500">“C&apos;est de la force des convictions que dépend la réussite, pas du nombre de partisans. ”</q>
            </div>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-white">
                        <Logo />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/points" className="hover:underline me-4 md:me-6">Points</Link>
                        </li>
                        <li>
                        {user ? (
                            <button onClick={logout} className="hover:underline cursor-pointer">Déconnexion</button>
                        ): (
                         <Link href="/login" className="hover:underline">Connexion</Link>
                        )}                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Yoann Deguire</span>
            </div>
        </footer>
    )
}
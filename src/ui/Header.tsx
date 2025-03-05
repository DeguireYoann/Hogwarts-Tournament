'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import { useAuth } from '@/context/Auth';
import Logo from './Icons/LogoIcon';

export default function Header() {
	const { user, logout, login } = useAuth();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 px-6 py-4  ${
				isScrolled
					? 'bg-[#181818] shadow-lg'
					: 'bg-transparent '
			}`}
		>
			<div className="flex justify-between items-center">
				<Logo />
				<ul className="flex space-x-2 items-center justify-center">
					<li>
						<Link href="/" className="hover:underline">Accueil</Link>
					</li>
					<li>
						{user ? (
							<button onClick={logout} className="hover:underline cursor-pointer">Déconnexion</button>
						): (
							<button onClick={login} className="hover:underline cursor-pointer">Connexion</button>
						)}
					</li>
				</ul>
				<AudioPlayer />
			</div>
		</div>
	);
}

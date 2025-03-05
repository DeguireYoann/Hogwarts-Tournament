import type { Metadata } from 'next';
import { Pirata_One } from 'next/font/google';
import { AuthProvider } from '@/context/Auth';
import './globals.css';
import { HogwartsProvider } from '../context/Hogwarts';
import Header from '@/ui/Header';
import Footer from '../ui/Footer';
;

const pirata = Pirata_One({
	weight: '400',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Hogwarts Tournament',
	description: 'This is a sample app used to encourage students into a friendly competition',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${pirata.className} antialiased`} >
				<video 
					autoPlay 
					muted 
					loop 
					className="fixed top-0 left-0 w-full h-full object-cover saturate-0 z-0"
				>
					<source src="/videos/banner.mp4" type="video/mp4" />
				</video>
				<div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_transparent,_black)] z-10"></div>
				<div className="relative z-20 w-full">
					<AuthProvider>
						<HogwartsProvider>
							<Header/>
							{children}
							<Footer/>
						</HogwartsProvider>
					</AuthProvider>
				</div>
			</body>
		</html>
	);
}

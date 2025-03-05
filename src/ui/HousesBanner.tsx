'use client';

import { useHogwarts } from '@/context/Hogwarts';
import { useState } from 'react';

export default function HousesBanner() {
	const { houses } = useHogwarts();
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e;
		const x = (clientX / window.innerWidth - 0.5) * 40;
		const y = (clientY / window.innerHeight - 0.5) * 40;
		setOffset({ x, y });
	};

	return (
		<div className="flex flex-col">
			<div className="relative flex flex-col md:flex-row justify-center items-center w-full h-[80vh] bg-[#080808] border-b-1 " onMouseMove={handleMouseMove}>
				<div
					className="relative flex justify-center items-center h-full w-full md:w-1/2 p-6 bg-red-600 shadow-lg overflow-clip saturate-0 md:border-r-1 "
					style={{
						backgroundImage: 'url("/images/texture.jpg")',
						backgroundSize: 'cover',
						backgroundBlendMode: 'multiply',
					}}
				>
					<h2 className="font-extrabold text-6xl z-40 text-white">{houses.gryffondor} points</h2>
					<img src="/images/gryffondor-logo.png" className="absolute opacity-25 z-20" />
				</div>
      
				<div className="relative flex justify-center flex-col md:h-full w-full items-center p-6 bg-gradient-to-t from-[#080808] to-gray-900 shadow-lg saturate-0">
					<img 
						src="images/gryffondor03.png" 
						className="self-center m-4"
						style={{
							transform: `translate(${offset.x}px, ${offset.y}px)`,
							transition: 'transform 0.1s linear',
						}}
					/>
					<p className="text-2xl  mx-5 z-40">
              Gryffondor valorise le courage, la bravoure et la détermination
					</p>
				</div>
			</div>

			<div className="relative flex flex-col md:flex-row justify-center items-center w-full h-[80vh] bg-[#080808] border-b-1 md:border-b-0 " onMouseMove={handleMouseMove}>
				<div
					className="relative flex justify-center items-center h-full w-full md:w-1/2 p-6 bg-green-800 shadow-lg overflow-clip saturate-0 md:border-r-1 "
					style={{
						backgroundImage: 'url("/images/texture.jpg")',
						backgroundSize: 'cover',
						backgroundBlendMode: 'multiply',
					}}
				>
					<h2 className="font-extrabold text-6xl z-40 text-white">{houses.slytherin} points</h2>
					<img src="/images/slytherin-logo.png" className="absolute opacity-25 z-20"  />
				</div>

				<div className="relative flex justify-center flex-col md:h-full w-full items-center p-6 bg-gradient-to-b from-[#080808] to-gray-900 shadow-lg saturate-0">
					<img 
						src="images/slytherin02.png" 
						className="self-center m-4"
						style={{
							transform: `translate(${offset.x}px, ${offset.y}px)`,
							transition: 'transform 0.1s linear',
						}}
					/>
					<p className="text-2xl  mx-5 z-40">
            Serpentard valorise la ruse, l&apos;ambition et la détermination.
					</p>
				</div>
			</div>
		</div>

	);
}

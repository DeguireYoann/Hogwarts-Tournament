'use client'

import { useAuth } from '@/context/Auth';
import { useHogwarts } from '@/context/Hogwarts'
import { useEffect, useState } from 'react';

export default function PointsBanner() {
	const {houses, addPoints} = useHogwarts();
	const { user, isAdmin } = useAuth();
            
	const [winningHouse, setWinningHouse] = useState('');
    
	const handleAddPoints = async (house: 'gryffondor' | 'slytherin') => {
		await addPoints(house, 10);
	};

	useEffect(()=> {
		const winner = houses.gryffondor > houses.slytherin ?
			'Gryffondor':
			'Serpentard'
		setWinningHouse(winner);
	}, [houses])


	return(
		<div className="flex flex-col justify-center items-center bg-[#181818] border-b-1 ">
			<h2 className="text-3xl  py-3 border-b-1 "><strong className={`${winningHouse === 'Gryffondor' ? 'text-red-700' : 'text-green-700'}`}>{winningHouse}</strong> est en avance</h2>
			<div className="flex flex-col h-[80vh] md:h-[10em] w-full md:flex-row shadow-lg ">
				<div className="relative flex flex-col justify-center items-center flex-1 border-b-1 md:border-b-0 md:border-r-1  bg-no-repeat bg-left bg-contain overflow-clip">
					<img src="/images/gryffondor-logo.png" className="absolute saturate-0 right-[-100px] top-0 opacity-30 w-[250px]"/>
					<p className="text-8xl text-white">
						{houses.gryffondor}
					</p>
					{user && isAdmin && (
						<button onClick={() => handleAddPoints('gryffondor')} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-200 text-red-800 inline-block">
							<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-800 group-hover:h-full opacity-90"></span>
							<span className="relative group-hover:text-white">+10 Gryffondor</span>
						</button>
					)}
				</div>
				<div className="relative flex flex-col justify-center items-center flex-1 bg-no-repeat bg-left bg-contain overflow-clip">
					<img src="/images/slytherin-logo.png" className="absolute saturate-0 left-[-100px] top-[-20px] opacity-30 w-[250px]"/>
					<p className="text-8xl text-white">
						{houses.slytherin}
					</p>
					{user && isAdmin && (
						<button onClick={() => handleAddPoints('slytherin')} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-green-200 text-green-800 inline-block">
							<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-800 group-hover:h-full opacity-90"></span>
							<span className="relative group-hover:text-white">+10 Serpentard</span>
						</button> 
					)}
				</div>
			</div>
		</div>
	)
}
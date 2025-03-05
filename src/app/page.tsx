import PointsBanner from '@/ui/PointsBanner';
import HousesBanner from '@/ui/HousesBanner';


export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="h-[100vh] flex justify-center items-center aligns-center">
				<h1 className="text-6xl md:text-8xl ">Championnat</h1>
			</div>
			<div className="container mx-auto">
				<PointsBanner />
				<HousesBanner/>
			</div>
		</div>
	);
}

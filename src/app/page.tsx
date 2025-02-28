import Slider from "./ui/Slider";
import VideoBanner from "./ui/VideoBanner";


export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <VideoBanner />
      <div className="container mx-auto">
      <Slider/>
      </div>
    </div>
  );
}

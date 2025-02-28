export default function VideoBanner() {
    return (
        <div className="relative flex justify-center items-center max-h-[720px] overflow-clip">
            <h1 className="absolute text-white text-8xl">Tournois des maisons</h1>
            <video autoPlay loop muted playsInline className="banner-video">
                <source src="/videos/banner.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

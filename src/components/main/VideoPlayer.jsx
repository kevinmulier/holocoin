import { Play } from 'lucide-react';

const VideoPlayerMain = () => {
  return (
    <div className="relative flex justify-center items-center w-full mx-auto max-w-[1536px]">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100 from-[0.1%] via-transparent to-[99.9%] to-base-100 max-md:hidden"></div>
      <div className="absolute inset-0 h-full bg-gradient-to-b from-neutral from-[0.1%] via-transparent to-[99.9%] to-base-100 md:hidden"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-base-100 from-[0.1%] via-transparent to-[99.9%] to-base-100 max-2xl:hidden"></div>
      <button className="absolute [padding:_clamp(1.25rem,2.083vw+0.833rem,2.5rem)] bg-transparent border-4 rounded-full btn border-primary text-primary h-fit w-fit hover:bg-secondary hover:border-secondary">
        <Play className="fill-current [height:_clamp(1.875rem,6.25vw+0.625rem,5.625rem)] [width:_clamp(1.875rem,6.25vw+0.625rem,5.625rem)]" />
      </button>
      <img
        src="/images/lol_image.webp"
        alt="League of Legends NFTs"
        className="object-cover max-lg:aspect-video lg:w-full"
      />
    </div>
  );
};

export default VideoPlayerMain;

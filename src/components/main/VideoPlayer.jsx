import { Play } from 'lucide-react';

const VideoPlayerMain = () => {
  return (
    <div className="relative flex justify-center items-center w-full mx-auto max-w-[2560px]">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/90 from-[5%] via-base-100/0 to-[95%] to-base-100/90"></div>
      <button className="absolute [padding:_clamp(1.25rem,2.083vw+0.833rem,2.5rem)] bg-transparent border-4 rounded-full btn border-primary text-primary h-fit w-fit">
        <Play className="fill-current [height:_clamp(1.875rem,6.25vw+0.625rem,5.625rem)] [width:_clamp(1.875rem,6.25vw+0.625rem,5.625rem)]" />
      </button>
      <img src="/images/lol_image.webp" alt="League of Legends NFTs" className="w-full" />
    </div>
  );
};

export default VideoPlayerMain;

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoPlayerMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex justify-center items-center w-full mx-auto max-w-[1536px]">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100 from-[0.1%] via-transparent to-[99.9%] to-base-100 max-md:hidden"></div>
      <div className="absolute inset-0 h-full bg-gradient-to-b from-neutral from-[0.1%] via-transparent to-[99.9%] to-base-100 md:hidden"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-base-100 from-[0.1%] via-transparent to-[99.9%] to-base-100 max-2xl:hidden"></div>
      <button
        className="absolute [padding:_clamp(1.25rem,2.083vw+0.833rem,2.5rem)] bg-transparent border-4 rounded-full btn border-primary text-primary h-fit w-fit hover:bg-secondary hover:border-secondary"
        aria-label="Play video">
        <Play className="fill-current [height:_clamp(1.875rem,6.25vw+0.625rem,5.625rem)] [width:_clamp(1.875rem,6.25vw+0.625rem,5.625rem)]" />
      </button>
      <img
        srcSet="/images/lol_image_sd.webp 768w, /images/lol_image.webp 1502w"
        alt="League of Legends NFTs"
        className="object-cover max-lg:aspect-video lg:w-full"
        width="1502"
        height="591"
      />
    </motion.div>
  );
};

export default VideoPlayerMain;

import { RarityCarouselDesktop, RarityCarouselMobile } from '../../misc/Carousels';
import RarityTitle from './RarityTitle';
import { motion } from 'framer-motion';

const Rarity = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className="w-full py-16 bg-neutral">
        <section className="flex flex-col w-full mx-auto max-w-[1512px] px-7">
          <RarityTitle />
          <RarityCarouselDesktop />
          <RarityCarouselMobile />
        </section>
      </motion.div>
    </>
  );
};

export default Rarity;

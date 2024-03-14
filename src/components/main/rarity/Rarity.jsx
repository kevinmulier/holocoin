import { RarityCarouselDesktop, RarityCarouselMobile } from '../../misc/Carousels';
import RarityTitle from './RarityTitle';

const Rarity = () => {
  return (
    <>
      <div className="w-full py-16 bg-neutral">
        <section className="flex flex-col w-full mx-auto max-w-[1512px] px-7">
          <RarityTitle />
          <RarityCarouselDesktop />
          <RarityCarouselMobile />
        </section>
      </div>
    </>
  );
};

export default Rarity;

import { RarityCarouselDesktop, RarityCarouselMobile } from '../../misc/Carousels';
import RarityTitle from './RarityTitle';

const Rarity = () => {
  return (
    <>
      <div className="w-full bg-neutral">
        <section className="flex flex-col w-full py-12 mx-auto  max-w-[1512px] px-7">
          <RarityTitle />
          <RarityCarouselDesktop />
          <RarityCarouselMobile />
        </section>
      </div>
    </>
  );
};

export default Rarity;

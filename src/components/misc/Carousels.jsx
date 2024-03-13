import AvatarCard from './AvatarCard';
import { usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './EmblaSelectedSnapDisplay';

export const TeamCarousel = () => {
  const options = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="embla lg:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <AvatarCard />
          </div>
          <div className="embla__slide">
            <AvatarCard />
          </div>
          <div className="embla__slide">
            <AvatarCard />
          </div>
          <div className="embla__slide">
            <AvatarCard />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="justify-center embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const RarityCarouselMobile = () => {
  const options = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="embla lg:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array(9)
            .fill()
            .map((_, index) => (
              <div className="embla__slide" key={index}>
                <AvatarCard />
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="justify-center embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const RarityCarouselDesktop = () => {
  const options = { slidesToScroll: 3, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla_desktop_rarity max-lg:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array(9)
            .fill()
            .map((_, index) => (
              <div className="embla__slide" key={index}>
                <AvatarCard />
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex items-center gap-8 mx-auto font-semibold md:gap-4 w-fit md:mr-0 md:ml-auto">
          <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
          <button className="text-lg btn btn-circle btn-secondary text-primary md:order-1" onClick={onPrevButtonClick}>
            &lt;
          </button>
          <button className="text-lg btn btn-circle btn-secondary text-primary md:order-2" onClick={onNextButtonClick}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

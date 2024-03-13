import AvatarCard from './AvatarCard';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';

export const TeamCarousel = () => {
  const options = { loop: true };
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
  const options = { loop: true };
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

export const RarityCarouselDesktop = () => {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla_desktop_rarity max-lg:hidden">
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
          <div className="embla__slide">
            <AvatarCard />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex items-center gap-8 mx-auto font-semibold md:gap-4 w-fit md:mr-0 md:ml-auto">
          {/* <span className="md:mr-3">01/03</span> */}
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

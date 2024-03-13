import AvatarCard from './AvatarCard';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';

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

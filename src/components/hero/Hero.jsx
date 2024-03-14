import { useState } from 'react';
import HeroImage from './HeroImage';
import HeroSocials from './HeroSocials';
import HeroSwitcher from './HeroSwitcher';
import HeroText from './HeroText';

const Hero = () => {
  const [slideNum, setSlideNum] = useState(1);

  return (
    <div className="pb-16 mx-auto md:pb-20 max-w-[1512px]">
      <section className="flex pt-24 pb-12 max-md:pb-8 pr-6 md:pr-8 mx-auto pl-[54px] w-full max-md:flex-col max-md:pt-4 max-md:px-0">
        <HeroText />
        <HeroImage slideNum={slideNum} />
        <HeroSocials />
      </section>
      <HeroSwitcher slideNum={slideNum} setSlideNum={setSlideNum} />
    </div>
  );
};

export default Hero;

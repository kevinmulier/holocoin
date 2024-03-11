import HeroImage from './HeroImage';
import HeroSocials from './HeroSocials';
import HeroSwitcher from './HeroSwitcher';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="flex pt-24 pb-20 pr-6 mx-auto pl-[50px] w-full max-md:flex-col max-md:pt-4 max-md:px-0">
        <HeroText />
        <HeroImage />
        <HeroSocials />
      </section>
      <HeroSwitcher />
    </div>
  );
};

export default Hero;

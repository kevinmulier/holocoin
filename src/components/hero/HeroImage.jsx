const HeroImage = () => {
  return (
    <div className="relative w-6/12 h-fit max-md:absolute max-md:-z-10 max-md:w-full max-md:h-auto max-md:left-[50%] max-md:translate-x-[-50%]">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/10 to-base-100 md:hidden"></div>
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/0 via-base-100/0 via-[93%] to-base-100 max-md:hidden"></div>
      <img src="/images/hero_image.png" alt="Hero banner" className="w-full" />
    </div>
  );
};

export default HeroImage;

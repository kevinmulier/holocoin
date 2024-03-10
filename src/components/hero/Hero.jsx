const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="flex pt-24 pb-20 pr-6 mx-auto pl-[50px] w-full max-md:flex-col max-md:pt-4 max-md:px-0">
        <div className="flex flex-col max-md:mt-16 max-md:px-7 md:w-6/12">
          <h1 className="mb-8 text-6xl font-semibold max-lg:text-[38px] text-primary">
            Lorem ipsum dolor sit amet, <span className="text-secondary">Ghirs</span>
          </h1>
          <p className="mb-4 max-md:text-primary">
            Community-centered experiences.
            <br />
            Immersive worlds.
          </p>
          <p className="mb-8 font-extralight">
            6,000 NFT homes waiting for new owners.
            <br />
            It&apos;s our world, let&apos;s make it personal.
          </p>
          <button
            className="min-h-0 py-3 font-semibold rounded-full max-md:mx-auto max-w-60 btn btn-secondary text-primary h-fit max-md:px-10"
            aria-label="Join the adventure">
            Join the adventure
          </button>
        </div>
        <div className="relative w-6/12 h-fit max-md:absolute max-md:-z-10 max-md:w-full max-md:h-auto max-md:left-[50%] max-md:translate-x-[-50%]">
          <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/10 to-base-100 md:hidden"></div>
          <img src="/images/hero_image.png" alt="Hero banner" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 max-md:hidden">
          <a href="#">
            <img src="/logo/twitter_icon.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/logo/fb_icon.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/logo/ig_icon.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/logo/discord_icon.svg" alt="Discord" />
          </a>
        </div>
      </section>
      <div className="flex items-center gap-8 mx-auto font-semibold md:gap-4 w-fit md:mr-4 md:ml-auto">
        <button className="text-lg btn btn-circle btn-secondary text-primary md:order-1">&lt;</button>
        <span className="md:mr-3">01/03</span>
        <button className="text-lg btn btn-circle btn-secondary text-primary md:order-2">&gt;</button>
      </div>
    </div>
  );
};

export default Hero;

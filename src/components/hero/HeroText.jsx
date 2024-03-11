const HeroText = () => {
  return (
    <div className="flex flex-col max-md:mt-16 max-md:px-7 md:w-6/12">
      <h1 className="mb-8 [font-size:_clamp(2.375rem,1.9167rem+2.2917vw,3.75rem)] font-semibold text-primary">
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
  );
};

export default HeroText;

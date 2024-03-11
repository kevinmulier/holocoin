const About = () => {
  return (
    <>
      <section className="flex justify-between w-full py-12 mx-auto max-md:flex-col max-md:bg-neutral max-w-7xl max-xl:px-7">
        <div className="relative flex flex-col mb-8 md:hidden">
          <h2 className="font-semibold text-[32px] text-primary">About</h2>
          <span className="absolute top-11 left-5 h-[3px] rounded-tl-full rounded-tr-full w-14 bg-secondary"></span>
        </div>
        <div className="flex flex-col justify-center w-5/12 pt-4 mx-auto max-md:w-full max-md:mb-12">
          <div className="relative flex justify-center mb-8 h-72">
            <img src="/images/avatar.png" alt="Avatar" className="absolute top-0 left-[50%] -translate-x-[50%] z-30" />
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="absolute top-0 left-[50%] -translate-x-[50%] z-20 -rotate-6 opacity-70"
            />
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="absolute top-0 left-[50%] -translate-x-[50%] z-10 -rotate-12 opacity-40"
            />
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="absolute top-0 left-[50%] -translate-x-[50%] opacity-20 rounded-[120px] scale-110"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[22px] text-primary font-semibold">Lorem ipsum dolor</p>
            <span className="font-extralight">Lorem ipsum dolor</span>
          </div>
        </div>
        <div className="flex flex-col w-6/12 leading-tight max-md:w-full">
          <div className="relative flex flex-col mb-8 max-md:hidden">
            <h2 className="font-semibold text-[32px] text-primary">About</h2>
            <span className="absolute top-11 left-5 h-[3px] rounded-tl-full rounded-tr-full w-14 bg-secondary"></span>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus
            commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <button className="min-h-0 px-20 py-3 font-semibold rounded-full btn btn-outline border-primary text-primary h-fit w-fit max-md:mx-auto">
            Join Discord
          </button>
        </div>
      </section>
    </>
  );
};

export default About;

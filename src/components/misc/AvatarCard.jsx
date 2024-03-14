const AvatarCard = () => {
  return (
    <>
      <div className="relative flex justify-center w-full">
        <img src="/images/avatar.webp" alt="Avatar" className="w-full opacity-0 max-w-80" width="238" height="279" />
        <img
          src="/images/avatar.webp"
          alt="Avatar"
          className="absolute top-0 left-[50%] -translate-x-[50%] z-30 w-full max-w-80"
        />
        <img
          src="/images/avatar.webp"
          alt="Avatar"
          className="absolute top-0 left-[50%] -translate-x-[50%] z-20 -rotate-6 opacity-70 w-full max-w-80"
        />
        <img
          src="/images/avatar.webp"
          alt="Avatar"
          className="absolute top-0 left-[50%] -translate-x-[50%] z-10 -rotate-12 opacity-40 w-full max-w-80"
        />
        <img
          src="/images/avatar.webp"
          alt="Avatar"
          className="absolute top-5 left-[50%] -translate-x-[50%] opacity-[0.25] rounded-[120px] scale-110 w-full max-w-80"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-[16%] text-center">
        <p className="lg:[font-size:_clamp(0.875rem,-1.125rem+3.125vw,1.375rem)] text-[22px] text-primary font-semibold">
          Lorem ipsum dolor
        </p>
        <span className="font-extralight lg:[font-size:_clamp(0.75rem,-1.125rem+3.125vw,1rem)]">Lorem ipsum dolor</span>
      </div>
    </>
  );
};

export default AvatarCard;

const HeroSocials = () => {
  return (
    <div className="flex flex-col gap-5 max-md:hidden">
      <a href="#" className="hover:brightness-75">
        <img src="/logo/twitter_icon.svg" alt="Twitter" />
      </a>
      <a href="#" className="hover:brightness-75">
        <img src="/logo/fb_icon.svg" alt="Facebook" />
      </a>
      <a href="#" className="hover:brightness-75">
        <img src="/logo/ig_icon.svg" alt="Instagram" />
      </a>
      <a href="#" className="hover:brightness-75">
        <img src="/logo/discord_icon.svg" alt="Discord" />
      </a>
    </div>
  );
};

export default HeroSocials;

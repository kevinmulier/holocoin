const FooterSocials = () => {
  return (
    <div className="flex items-center justify-center gap-7 md:gap-4 max-md:mt-10">
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/twitter_icon.svg" alt="Twitter" />
      </a>
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/fb_icon.svg" alt="Facebook" />
      </a>
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/ig_icon.svg" alt="Instagram" />
      </a>
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/discord_icon.svg" alt="Discord" />
      </a>
    </div>
  );
};

export default FooterSocials;

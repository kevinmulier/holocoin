const FooterSocials = () => {
  return (
    <div className="flex items-center justify-center gap-7 md:gap-4 max-md:mt-10">
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/twitter_icon.svg" alt="Twitter" width="16" height="16" />
      </a>
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/fb_icon.svg" alt="Facebook" width="16" height="16" />
      </a>
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/ig_icon.svg" alt="Instagram" width="16" height="16" />
      </a>
      <a href="#" className="hover:brightness-75 md:[width:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">
        <img src="/logo/discord_icon.svg" alt="Discord" width="16" height="16" />
      </a>
    </div>
  );
};

export default FooterSocials;

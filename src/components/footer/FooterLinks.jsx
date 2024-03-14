const FooterLinks = () => {
  return (
    <nav className="flex justify-center gap-4 font-semibold lg:gap-12 max-md:flex-col text-accent md:[font-size:clamp(0.75rem,0.375rem+0.7813vw,1rem)] text-center items-center">
      <a href="#" className="hover:text-primary">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-primary">
        Terms of Use
      </a>
      <a href="#" className="hover:text-primary">
        Content Policy
      </a>
      <a href="#" className="hover:text-primary">
        Code of Ethics
      </a>
    </nav>
  );
};

export default FooterLinks;

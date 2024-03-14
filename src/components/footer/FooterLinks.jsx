const FooterLinks = () => {
  return (
    <nav className="flex items-center justify-center gap-4 font-semibold md:gap-12 max-md:flex-col text-accent">
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

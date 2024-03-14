const FooterCopyright = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();

  return <span className="md:[font-size:clamp(0.75rem,0.375rem+0.7813vw,1rem)]">© {currentYear} Holocoin</span>;
};

export default FooterCopyright;

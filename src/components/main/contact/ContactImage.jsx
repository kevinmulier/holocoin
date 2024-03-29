const ContactImage = () => {
  return (
    <div className="relative w-6/12 h-fit max-md:absolute max-md:-z-10 max-md:w-full max-md:h-auto max-md:left-[50%] max-md:translate-x-[-50%] md:pt-4 max-md:pt-14 max-md:max-w-md">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/10 to-base-100 md:hidden"></div>
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/0 via-base-100/0 via-[93%] to-base-100 max-md:hidden"></div>
      <img src="/images/hero_image.webp" alt="Contact banner" className="w-full" width="717" height="422" />
    </div>
  );
};

export default ContactImage;

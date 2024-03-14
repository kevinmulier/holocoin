import FooterLanguageSelect from './FooterLanguageSelect';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="w-full md:bg-neutral">
      <div className="flex mt-12 mx-auto max-md:flex-col max-md:w-fit max-md:items-center w-full max-w-[1512px] px-4 gap-4 md:gap-8">
        <FooterLanguageSelect />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;

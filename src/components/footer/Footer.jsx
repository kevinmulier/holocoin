import FooterCopyright from './FooterCopyright';
import FooterLanguageSelect from './FooterLanguageSelect';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

const Footer = () => {
  return (
    <footer className="w-full md:bg-neutral">
      <div className="flex mt-12 max-md:mb-12 mx-auto max-md:flex-col max-md:w-fit max-md:items-center w-full max-w-[1512px] px-4 gap-4 lg:gap-8">
        <FooterLanguageSelect />
        <FooterLinks />
        <div className="flex items-center gap-4 max-md:flex-col md:ml-auto">
          <FooterSocials />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

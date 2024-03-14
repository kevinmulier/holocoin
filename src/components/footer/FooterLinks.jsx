import { useTranslation } from 'react-i18next';

const FooterLinks = () => {
  const { t } = useTranslation();

  const items = ['privacyPolicy', 'termsOfUse', 'contentPolicy', 'codeOfEthics'];

  return (
    <nav className="flex justify-center gap-4 font-semibold lg:gap-12 max-md:flex-col text-accent md:[font-size:clamp(0.75rem,0.375rem+0.7813vw,1rem)] text-center items-center">
      {items.map((item) => (
        <a href="#" className="hover:text-primary" key={item}>
          {t(item)}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;

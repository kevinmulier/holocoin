import { useTranslation } from 'react-i18next';

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col leading-tight max-md:mt-16 max-md:px-7 md:w-5/12">
      <h1 className="mb-8 [font-size:_clamp(2.375rem,1.9167rem+2.2917vw,3.75rem)] font-semibold text-primary">
        Lorem ipsum dolor sit amet, <span className="text-secondary">Ghirs</span>
      </h1>
      <p className="mb-4 max-md:text-primary">
        {t('heroParagraph1')}
        <br />
        {t('heroParagraph2')}
      </p>
      <p className="mb-8 font-extralight">
        {t('heroParagraph3')}
        <br />
        {t('heroParagraph4')}
      </p>
      <a
        href="#"
        className="min-h-0 py-3 font-semibold rounded-full max-md:mx-auto max-w-60 btn btn-secondary text-primary h-fit max-md:px-10"
        aria-label="Join the adventure">
        {t('heroJoinButton')}
      </a>
    </div>
  );
};

export default HeroText;

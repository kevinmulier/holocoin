import { useTranslation } from 'react-i18next';

const ContactText = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="mt-3 mb-12 text-primary">{t('contactUsText')}</p>
      <a
        href="#"
        className="min-h-0 px-20 py-3 font-semibold rounded-full btn btn-secondary text-primary h-fit w-fit max-md:mx-auto">
        {t('contactUsButton')}
      </a>
    </>
  );
};

export default ContactText;

import { useTranslation } from 'react-i18next';

const AboutText = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <a
        href="#"
        className="min-h-0 py-3 font-semibold rounded-full btn btn-outline border-primary text-primary h-fit w-[246px] max-md:mx-auto hover:bg-primary hover:border-primary">
        {t('joinDiscordButton')}
      </a>
    </>
  );
};

export default AboutText;

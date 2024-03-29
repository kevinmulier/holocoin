import { useTranslation } from 'react-i18next';

const RarityTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mb-8 md:self-center w-fit">
      <h2 className="font-semibold text-[32px] text-primary">{t('rarity')}</h2>
      <span className="h-[3px] rounded-tl-full rounded-tr-full w-14 bg-secondary"></span>
    </div>
  );
};

export default RarityTitle;

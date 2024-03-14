import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const AboutTitle = ({ mobileHide, desktopHide }) => {
  const { t } = useTranslation();

  const style = desktopHide
    ? 'flex flex-col mb-8 md:hidden w-fit items-center'
    : mobileHide
    ? 'flex flex-col mb-8 max-md:hidden w-fit items-center'
    : 'flex flex-col mb-8 w-fit items-center';

  return (
    <div className={style}>
      <h2 className="font-semibold text-[32px] text-primary">{t('about')}</h2>
      <span className="h-[3px] rounded-tl-full rounded-tr-full w-14 bg-secondary"></span>
    </div>
  );
};

export default AboutTitle;

AboutTitle.propTypes = {
  mobileHide: PropTypes.bool,
  desktopHide: PropTypes.bool,
};

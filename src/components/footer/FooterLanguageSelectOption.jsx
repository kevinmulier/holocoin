import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const FooterLanguageSelectOption = ({ languageObject, setSelectedLanguage }) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(languageObject.languageAbbrv);
  };

  return (
    <li
      onClick={() => {
        setSelectedLanguage({ flagSrc: languageObject.flagSrc, language: languageObject.language });
        changeLanguage();
        document.activeElement.blur();
      }}>
      <span className="text-primary">
        <img src={languageObject.flagSrc} alt={languageObject.language} className="w-fit" width="16" height="16" />{' '}
        {languageObject.language}
      </span>
    </li>
  );
};

export default FooterLanguageSelectOption;

FooterLanguageSelectOption.propTypes = {
  languageObject: PropTypes.object.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
};

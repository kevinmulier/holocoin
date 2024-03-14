import PropTypes from 'prop-types';

const FooterLanguageSelectOption = ({ languageObject, setSelectedLanguage }) => {
  return (
    <li
      onClick={() => {
        setSelectedLanguage({ flagSrc: languageObject.flagSrc, language: languageObject.language });
        document.activeElement.blur();
      }}>
      <span className="text-primary">
        <img src={languageObject.flagSrc} alt={languageObject.language} className="w-fit" /> {languageObject.language}
      </span>
    </li>
  );
};

export default FooterLanguageSelectOption;

FooterLanguageSelectOption.propTypes = {
  languageObject: PropTypes.object.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
};

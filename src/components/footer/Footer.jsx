import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import FooterLanguageSelectOption from './FooterLanguageSelectOption';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({ flagSrc: '/logo/en_rounded.png', language: 'English' });

  const languages = [
    { flagSrc: '/logo/en_rounded.png', language: 'English' },
    { flagSrc: '/logo/fr_rounded.png', language: 'Français' },
  ];

  return (
    <footer className="w-full">
      <div className="flex pt-12 mx-auto max-md:flex-col max-md:w-fit max-md:items-center w-full max-w-[1512px]">
        <div className="dropdown dropdown-hover dropdown-top w-36">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <img src={selectedLanguage.flagSrc} alt={`${selectedLanguage.language} flag`} /> {selectedLanguage.language}{' '}
            <ChevronDown size={16} />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-primary/5 backdrop-blur-lg rounded-box">
            {languages.map((language) => (
              <FooterLanguageSelectOption
                languageObject={language}
                setSelectedLanguage={setSelectedLanguage}
                key={language.language}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

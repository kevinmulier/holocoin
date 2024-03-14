import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FooterLanguageSelectOption from './FooterLanguageSelectOption';

const FooterLanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({ flagSrc: '/logo/en_rounded.png', language: 'English' });

  const languages = [
    { flagSrc: '/logo/en_rounded.png', language: 'English' },
    { flagSrc: '/logo/fr_rounded.png', language: 'Français' },
  ];

  return (
    <div className="flex justify-center dropdown dropdown-hover dropdown-top w-36">
      <div
        tabIndex={0}
        role="button"
        className="px-0 text-base md:[font-size:clamp(0.75rem,0.375rem+0.7813vw,1rem)] font-normal btn btn-ghost no-animation hover:bg-transparent">
        <img src={selectedLanguage.flagSrc} alt={`${selectedLanguage.language} flag`} /> {selectedLanguage.language}{' '}
        <ChevronDown size={16} />
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-primary/5 backdrop-blur-lg rounded-box w-full">
        {languages.map((language) => (
          <FooterLanguageSelectOption
            languageObject={language}
            setSelectedLanguage={setSelectedLanguage}
            key={language.language}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterLanguageSelect;

import { useLanguage } from '../../hooks/useLanguage';

export const JotaiLanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} style={{ margin: '1rem' }}>
      {language === 'en' ? 'Deutsch' : 'English'}
    </button>
  );
};
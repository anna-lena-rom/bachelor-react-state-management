import { useLanguage } from '../../hooks/useLanguage';

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'wechsel zu German' : 'English'}
    </button>
  );
};
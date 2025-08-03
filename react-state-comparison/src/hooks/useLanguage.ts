import { useAtom } from 'jotai';
import { languageAtom } from '../state/JotaiAtom';

export const useLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));

  return { language, toggleLanguage };
};
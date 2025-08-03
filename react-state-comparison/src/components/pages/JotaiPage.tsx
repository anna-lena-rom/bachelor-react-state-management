import React from 'react';
import JotaiCounter from '../counters/JotaiCounter';
import { Form } from '../form/JotaiForm';
import { JotaiEntryList } from '../form/JotaiEntryList';
import { JotaiLanguageSwitch } from '../languageswitch/JotaiLanguageSwitch';
import JotaiThemeToggle from '../themetoggle/JotaiThemeToggle';
import { useAtom } from 'jotai';
import { themeAtom } from '../../state/JotaiAtom';
import { lightTheme, darkTheme } from '../../styles/themes';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

const JotaiPage: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <h1>{theme} Mode</h1>
      <div className="container py-5">
        <h1 className="mb-4">Jotai Page</h1>
        <JotaiThemeToggle />
        <div>
          <JotaiLanguageSwitch />
          <p>{t.greeting}</p>
        </div>
      </div>
      <div>
        <Form />
        <JotaiEntryList />
      </div>
      <JotaiCounter />
    </div>
  );
};

export default JotaiPage;
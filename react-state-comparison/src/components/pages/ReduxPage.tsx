import React from 'react';
import ReduxCounter from '../counters/ReduxCounter';
import { ReduxForm } from '../form/ReduxForm';
import { ReduxEntryList } from '../form/ReduxEntryList';
import { ReduxLanguageSwitch } from '../languageswitch/ReduxLanguageSwitch';
import ReduxThemeToggle from '../themetoggle/ReduxThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reduxStore';
import { lightTheme, darkTheme } from '../../styles/themes';
import { translations } from '../../i18n/translations';

const ReduxPage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme?.value ?? 'light'); // falls du theme in redux hast
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const language = useSelector((state: RootState) => state.language.value);
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
        <h1 className="mb-4">Redux Page</h1>
        <ReduxThemeToggle />
        <div>
          <ReduxLanguageSwitch />
          <p>{t.greeting}</p>
        </div>
      </div>
      <div>
        <ReduxForm />
        <ReduxEntryList />
      </div>
      <ReduxCounter />
    </div>
  );
};

export default ReduxPage;

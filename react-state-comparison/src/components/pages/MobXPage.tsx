import React from 'react';
import { translations } from '../../i18n/translations';
import { languageStore, themeStore } from '../../state/mobxStore';
import MobXCounter from '../counters/MobxCounter';
import { lightTheme, darkTheme } from '../../styles/themes';
import { observer } from 'mobx-react-lite';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MobXLanguageSwitch } from '../languageswitch/MobXLanguageSwitch';
import { MobXEntryList } from '../form/MobXEntryList';
import { MobXForm } from '../form/MobXForm';

const MobXPage: React.FC = observer(() => {
  return (
    <div className={themeStore?.mode}
      style={{
        backgroundColor: themeStore?.mode === 'dark' ? darkTheme.background : lightTheme.background,
        color: themeStore?.mode === 'dark' ? darkTheme.text : lightTheme.text,
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <h1>{themeStore?.mode} Mode</h1>
      <div className="container py-5">
        <h1 className="mb-4">MobX Page</h1>
        <button
          onClick={themeStore.toggleMode}
          type="button"
        >
          <span className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
            <FaSun />
          </span>
          <span className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
            <FaMoon />
          </span>
        </button>
        <div>
          <MobXLanguageSwitch />
          <p>{languageStore.t.greeting}</p>
        </div>
      </div>
      <div>
        <MobXForm />
        <MobXEntryList /> 
      </div>
      <MobXCounter />
    </div>
  );
});

export default MobXPage;

import { languageStore } from '../../state/mobxStore';

export const MobXLanguageSwitch = () => {
    const language = languageStore.value;

  return (
    <button style={{ margin: '1rem' }} onClick={() => languageStore.toggleLanguage()}>
      {language === 'en' ? 'Deutsch' : 'English'}
    </button>
  );
};
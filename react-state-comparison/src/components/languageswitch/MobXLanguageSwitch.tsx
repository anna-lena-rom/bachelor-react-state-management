import { observer } from 'mobx-react-lite';
import { languageStore } from '../../state/mobxStore';

export const MobXLanguageSwitch = observer(() => {
  const language = languageStore.value;

  return (
    <button onClick={() => languageStore.toggleLanguage()} style={{ margin: '1rem' }}>
      {/*translations[nextLanguage].greeting*/}
      {language === 'en' ? 'Deutsch' : 'English'}
    </button>
  );
});
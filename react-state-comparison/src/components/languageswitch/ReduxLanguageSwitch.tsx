import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../state/reduxStore';
import { RootState } from '../../state/reduxStore';

export const ReduxLanguageSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <button style={{ margin: '1rem' }} onClick={() => dispatch(toggleLanguage())}>
      {language === 'en' ? 'Deutsch' : 'English'}
    </button>
  );
};
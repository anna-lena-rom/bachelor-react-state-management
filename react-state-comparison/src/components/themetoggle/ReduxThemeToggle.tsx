import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { RootState, AppDispatch } from '../../state/reduxStore';
import { toggleTheme } from '../../state/reduxStore';

const ReduxThemeToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.value);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
    >
      <span className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
        <FaSun />
      </span>

      <span className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        <FaMoon />
      </span>
    </button>
  );
};

export default ReduxThemeToggle;

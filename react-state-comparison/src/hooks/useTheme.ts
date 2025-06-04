import { useAtom } from 'jotai';
import { themeAtom } from '../state/JotaiAtom';

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
};

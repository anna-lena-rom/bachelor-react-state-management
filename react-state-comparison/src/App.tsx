import React from 'react';
import JotaiCounter from './components/counters/JotaiCounter';
import ReduxCounter from './components/counters/ReduxCounter';
import MobXCounter from './components/counters/MobxCounter';
import JotaiThemeToggle from './components/themetoggle/JotaiThemeToggle';
import { useAtom } from 'jotai';
import { themeAtom } from './state/JotaiAtom';
import { lightTheme, darkTheme } from './styles/themes';

const App: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <h1>{theme.toUpperCase()} Mode</h1>
      <div className="container py-5">
        <h1 className="mb-4">Bootstrap Dark Mode in React</h1>
        <JotaiThemeToggle />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <JotaiCounter />
        <ReduxCounter />
        <MobXCounter />
      </div>
    </div>
  );
};

export default App;

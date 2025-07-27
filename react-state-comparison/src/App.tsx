import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import JotaiPage from './components/pages/JotaiPage';
import ReduxPage from './components/pages/ReduxPage';
import MobXPage from './components/pages/MobXPage';
import JotaiCounter from './components/counters/JotaiCounter';
import ReduxCounter from './components/counters/ReduxCounter';
import MobXCounter from './components/counters/MobxCounter';

/**
 * @returns export const ThemeLanguageToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
*/
const App: React.FC = () => {

  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div>
                <Link to="/jotai" className="btn btn-primary mt-4">
                  Go to the Jotai Page
                </Link>
              </div>
              <div>
                <Link to="/redux" className="btn btn-primary mt-4">
                  Go to the Redux Page
                </Link>
              </div>
              <div>
                <Link to="/mobx" className="btn btn-primary mt-4">
                  Go to the MobX Page
                </Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <JotaiCounter />
                <ReduxCounter />
                <MobXCounter />
                {/*<JotaiPage />*/}
              </div>
            </>
          }
        />

        {/* Jotai Page */}
        <Route path="/jotai" element={<JotaiPage />} />
        {/* Redux Page */}
        <Route path="/redux" element={<ReduxPage />} />
        {/* MobX Page */}
        <Route path="/mobx" element={<MobXPage />} />
      </Routes>
    </div>
  );
};

export default App;

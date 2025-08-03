import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import JotaiPage from './components/pages/JotaiPage';
import ReduxPage from './components/pages/ReduxPage';
import MobXPage from './components/pages/MobXPage';
import JotaiCounter from './components/counters/JotaiCounter';
import ReduxCounter from './components/counters/ReduxCounter';
import MobXCounter from './components/counters/MobxCounter';

const App: React.FC = () => {

return (
<div>
<Routes>
{/* Home Page */}
<Route
path = "/"
element = {
            <>
              <div className = "container py-10">
                <Link to = "/jotai" className = "btn btn-primary mt-4">
                  Go to the Jotai Page
                </Link>
              </div>
              <div className = "container py-10">
                <Link to = "/redux" className = "btn btn-primary mt-4">
                  Go to the Redux Page
                </Link>
              </div>
              <div className = "container py-10">
                <Link to = "/mobx" className = "btn btn-primary mt-4">
                  Go to the MobX Page
                </Link>
              </div>
              <div style = {{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <JotaiCounter />
                <ReduxCounter />
                <MobXCounter />
              </div>
            </>
          }
        />

        {/* Jotai Page */}
        <Route path = "/jotai" element = {<JotaiPage />} />
        {/* Redux Page */}
        <Route path = "/redux" element = {<ReduxPage />} />
        {/* MobX Page */}
        <Route path = "/mobx" element = {<MobXPage />} />
      </Routes>
    </div>
  );
};

export default App;

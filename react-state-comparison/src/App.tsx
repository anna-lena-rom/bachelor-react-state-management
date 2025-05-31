import React from 'react';
import JotaiCounter from './counters/JotaiCounter';
import ReduxCounter from './counters/ReduxCounter';
import MobXCounter from './counters/MobxCounter';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <JotaiCounter />
      <ReduxCounter />
      <MobXCounter />
    </div>
  );
};

export default App;

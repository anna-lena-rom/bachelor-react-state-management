import React from 'react';
import { observer } from 'mobx-react-lite';
import { counterStore } from '../../state/mobxStore';

const MobXCounter: React.FC = observer(() => {
  return (
    <div>
      <h2>MobX Counter</h2>
      <p>{counterStore.count}</p>
      <button style={{ marginRight: '5px' }} onClick={() => counterStore.increment()}>+</button>
      <button style={{ marginLeft: '5px' }}onClick={() => counterStore.decrement()}>-</button>
    </div>
  );
});

export default MobXCounter;

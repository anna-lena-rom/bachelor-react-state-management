import React from 'react';
import { atom, useAtom } from 'jotai';

export const jotaiCountAtom = atom(0);

const JotaiCounter: React.FC = () => {
  const [count, setCount] = useAtom(jotaiCountAtom);
  return (
    <div>
      <h2>Jotai Counter</h2>
      <p>{count}</p>
      <button style={{ marginRight: '5px' }} onClick={() => setCount(count + 1)}>+</button>
      <button style={{ marginLeft: '5px' }} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default JotaiCounter;

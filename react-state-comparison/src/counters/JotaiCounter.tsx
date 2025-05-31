import React from 'react';
import { useAtom } from 'jotai';
import { jotaiCountAtom } from '../state/JotaiAtom';

const JotaiCounter: React.FC = () => {
  const [count, setCount] = useAtom(jotaiCountAtom);
  return (
    <div>
      <h2>Jotai Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default JotaiCounter;

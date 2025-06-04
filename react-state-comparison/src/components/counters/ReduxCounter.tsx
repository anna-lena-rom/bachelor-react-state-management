import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, RootState, AppDispatch } from '../../state/reduxStore';

const ReduxCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ReduxCounter;

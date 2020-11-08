import React from 'react';

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
  return (
    <>
    <p> You've clicked the button {numberOfClicks} times</p>
    <button onClick={onIncrement}>Click Me!</button>
    </>
  );
}

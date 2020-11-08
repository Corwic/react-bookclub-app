import { useState, useEffect } from 'react';

const str2arr = b => {
  if (typeof b === 'string' && b!== '')
    return b.split(String.fromCharCode(7)).map(item => JSON.parse(item));
  else return b;
}
const arr2str = b => b
  .map(item => JSON.stringify(item))
  .join(String.fromCharCode(7));


export const useLocalStorage = ( storageKey, defaultValue ) => {

  const [state, setState] = useState(
    str2arr(localStorage.getItem(storageKey)) || defaultValue
  );

  useEffect(() => {
    if (state.length) {
      const stateStr = arr2str(state);
      localStorage.setItem(storageKey, stateStr)
    } else {
      localStorage.setItem(storageKey, state)
    }
  }, [state]);

  return [state, setState];
}

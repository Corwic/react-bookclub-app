import { useState, useEffect } from 'react';

export const useLocalStorage = ({ storageKey, defaultValue, Type = String }) => {
  const [state, setState] = useState(
    Type(localStorage.getItem(storageKey)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, state)
  }, [state]);

  return [state, setState];
}

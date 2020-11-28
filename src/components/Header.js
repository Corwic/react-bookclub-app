import React from 'react';
import { useLocalStorage } from '../components/useLocalStorage';

export const Header = () => {
  const [ currentReader, setCurrentReader ] = useLocalStorage ( 'current_reader', [] );

  return (
    <div className="header">
      <h1>Book Club</h1>
      <p>Hi, {currentReader}!</p>
    </div>
  )
}

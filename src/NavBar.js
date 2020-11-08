import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bookclub">Book Club</Link>
      </li>
      <li>
        <Link to="/gr-search">Good Reads Search</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/user">User Profile</Link>
      </li>
    </ul>
  </nav>
)

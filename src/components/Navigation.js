import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/">Books to Read</Link>
      </li>
      <li>
        <Link to="/readbooks">Read Books</Link>
      </li>
      <li>
        <Link to="/readers">Readers</Link>
      </li>
      <li>
        <Link to="/account">Your Account</Link>
      </li>
    </ul>
  </nav>
)

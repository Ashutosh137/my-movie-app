import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Movie List</Link></li>
        <li><Link to="/favorites">Favorite Movies</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

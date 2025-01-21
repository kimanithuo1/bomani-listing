import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => setActiveLink(link);

  return (
    <header className="bg-teal text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold">
          StayKenya
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`hover:text-yellow ${
                  activeLink === 'home' ? 'text-yellow' : ''
                }`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={`hover:text-yellow ${
                  activeLink === 'search' ? 'text-yellow' : ''
                }`}
                onClick={() => handleLinkClick('search')}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`hover:text-yellow ${
                  activeLink === 'dashboard' ? 'text-yellow' : ''
                }`}
                onClick={() => handleLinkClick('dashboard')}
              >
                Host Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

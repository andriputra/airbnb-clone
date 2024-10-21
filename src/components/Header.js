import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white p-4 sticky top-0 z-50 ">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/assets/img/logo-airbnb.png" 
            alt="Airbnb Logo" 
            className="w-8 h-8"
          />
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold">Ready to Airbnb it?</span>
          <button className="bg-gradient-to-r from-red-500 via-purple-500 to-purple-500 text-white py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:from-purple-500 hover:to-red-500">
          <FontAwesomeIcon icon={faHome} /> Airbnb Setup
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

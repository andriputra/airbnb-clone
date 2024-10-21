import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        <div className="font-bold text-xl">Airbnb</div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white p-2 rounded">Become a Host</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

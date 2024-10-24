import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white p-4 sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-2">
          <a href="https://www.airbnb.com/host/homes"><img
            src="/assets/img/logo-airbnb.png"
            alt="Airbnb Logo"
            className="w-8 h-8"
          /></a>
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <span className="text-lg md:text-xl font-semibold">
            Ready to Airbnb it?
          </span>
          <button className="bg-gradient-to-r from-red-500 via-red-600 to-purple-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:from-purple-500 hover:via-red-600 hover:to-red-500">
            <FontAwesomeIcon icon={faHome} /> Airbnb Setup
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MainFeature = () => {
  const [earnings, setEarnings] = useState(5741386);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const formattedEarnings = earnings.toLocaleString();

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setEarnings(value);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal); // Toggle the modal visibility
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 text-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        <div className="text-center lg:text-center mt-8">
          <h2 className="text-xxl font-semibold text-red-500 mb-0 leading-[0.5]">
            Airbnb it.
          </h2>
          <p className="text-xxl font-semibold text-gray-900 mb-2">
            You could earn
          </p>
          <p className="text-[68px] font-bold text-gray-900 mt-2">
            Rp {formattedEarnings}
          </p>
          <p className="text-lg">7 nights at an estimated Rp820,198 a night</p>
          <div className="my-6">
            <input
              type="range"
              min="1000000"
              max="10000000"
              step="100000"
              value={earnings}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg"
            />
          </div>
          <p className="mt-4">
            <a href="#" className="text-gray-700">
              Learn how we estimate your earnings
            </a>
          </p>
          
          {/* Button with Search Icon */}
          <button
            onClick={handleModalToggle}
            className="flex items-center mt-4 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none widht-full"
          >
            <FontAwesomeIcon icon={faSearch} />
            Search for more
          </button>
        </div>

        {/* Map Section */}
        <div className="relative">
          <div className="h-[500px] bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9037484420127!2d110.36658551472494!3d-7.769239879469523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5475b268b5f5%3A0x5e81e6e58fdd5e7a!2sUniversitas%20Diponegoro!5e0!3m2!1sen!2sid!4v1697513513032!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <h2 className="text-xl font-bold mb-4">Form Modal</h2>
            <form>
              <input
                type="text"
                placeholder="Enter your details"
                className="border border-gray-300 rounded-full p-2 w-full mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full px-4 py-2"
              >
                Submit
              </button>
            </form>
            <button
              onClick={handleModalToggle}
              className="absolute top-2 right-2 text-xl font-semibold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFeature;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

const MainFeature = () => {
  const [earnings, setEarnings] = useState(5741386);
  const [showModal, setShowModal] = useState(false);
  const [showModalNumber, setShowModalNumber] = useState(false);
  const [nights, setNights] = useState(7); // State untuk menyimpan jumlah malam
  const formattedEarnings = earnings.toLocaleString();

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setEarnings(value);
    }
  };

  const handleModalToggle = () => {
    setShowModal((prev) => !prev);
  };

  const handleChangesNumber = () => {
    setShowModalNumber((prev) => !prev);
  };

  const handleIncreaseNights = () => {
    setNights((prev) => prev + 1);
  };

  const handleDecreaseNights = () => {
    setNights((prev) => (prev > 1 ? prev - 1 : 1)); // Minimal 1 malam
  };

  const handleSubmit = () => {
    // Update angka pada elemen dengan ID "NightChange"
    const nightElement = document.getElementById("NightChange");
    if (nightElement) {
      nightElement.textContent = `${nights} nights`;
    }
    setShowModalNumber(false); // Tutup modal setelah submit
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 text-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-500 lg:text-[2.8rem] lg:leading-[1.3]">
            Airbnb it.
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 lg:text-[2.8rem] mb-6">
            You could earn
          </p>
          <p className="text-[48px] md:text-[68px] font-bold text-gray-900 mt-2">
            Rp {formattedEarnings}
          </p>
          <p className="text-lg md:text-xl">
            <button onClick={handleChangesNumber} id="NightChange" className="underline">
              {nights} nights
            </button>{" "}
            at an estimated Rp820,198 a night
          </p>
          <div className="my-6">
            <label htmlFor="earnings-slider" className="sr-only">
              Adjust Earnings
            </label>
            <input
              id="earnings-slider"
              type="range"
              min="1000000"
              max="10000000"
              step="100000"
              value={earnings}
              onChange={handleSliderChange}
              className="w-full h-1 bg-gray-200 rounded-lg"
              style={{ accentColor: "black" }}
            />
          </div>
          <p className="mt-4">
            <button
              className="text-gray-700"
              onClick={() => alert("Earnings estimate information...")}
            >
              Learn how we estimate your earnings
            </button>
          </p>

          <button
            onClick={handleModalToggle}
            className="flex items-center mt-4 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none lg:w-full md:w-auto"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2 text-red-500" />
            Search for more
          </button>
        </div>

        {/* Map Section */}
        <div className="relative">
          <div className="h-[300px] md:h-[500px] bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              title="Location Map of Universitas Diponegoro"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9037484420127!2d110.36658551472494!3d-7.769239879469523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5475b268b5f5%3A0x5e81e6e58fdd5e7a!2sUniversitas%20Diponegoro!5e0!3m2!1sen!2sid!4v1697513513032!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] p-5 w-[90%] md:w-[25%] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleModalToggle}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Tell us about your place</h2>
            <Form />
          </div>
        </div>
      )}

      {showModalNumber && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] p-5 w-[90%] md:w-[25%] relative">
            <button
              className="absolute top-3 right-5 text-gray-500 hover:text-gray-800"
              onClick={handleChangesNumber}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 pb-4 border-b border-b-gray-300 mb-8">
              How many nights?
            </h2>
            <div className="">
              <div className="flex justify-evenly gap-8 increase-number">
                <span
                  onClick={handleDecreaseNights}
                  className="rounded-full h-[50px] w-[50px] flex justify-center items-center border border-gray-300 hover:border-gray-500 hover:cursor-pointer text-gray-400 hover:text-gray-500 text-[26px] font-bold"
                >
                  -
                </span>
                <input
                  type="text"
                  value={nights}
                  readOnly
                  className="border border-gray-500 h-[50px] w-[120px] rounded-lg font-bold text-[24px] gap-0 text-center"
                />
                <span
                  onClick={handleIncreaseNights}
                  className="rounded-full h-[50px] w-[50px] flex justify-center items-center border border-gray-300 hover:border-gray-500 hover:cursor-pointer text-gray-400 hover:text-gray-500 text-[26px] font-bold"
                >
                  +
                </span>
              </div>
              <p className="text-gray-800 text-center font-sm font-bold">Night</p>
              <p className="text-gray-800 text-center font-sm m-6">
                Homes available all month average 13 nights booked
              </p>
              <button
                type="submit"
                className="bg-gray-900 text-white font-bold text-lg p-4 rounded-lg w-full hover:bg-gray-600"
                onClick={handleSubmit}
              >
                Update your estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFeature;

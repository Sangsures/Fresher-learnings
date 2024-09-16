import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const MetricsDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] min-h-screen p-12 w-full">
      <header className="w-full max-w-[1200px] flex flex-row gap-4 mb-4">
        <div className="flex flex-col gap-4">
          <div className="relative inline-block text-left bg-white shadow-sm rounded-lg">
            <button
              type="button"
              className="inline-flex justify-center items-center w-40 h-12 rounded-md shadow-sm 
               bg-white text-sm font-medium text-gray-950 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 text-center"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              Metric type
              <svg
                className="ml-2 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute left-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-950"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-950"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-950"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-sm text-gray-500">TOTAL COST</div>
            <div className="text-2xl font-bold">₹ 16,000</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-sm text-gray-500">COST CHANGE</div>
            <div className="text-2xl font-bold">₹ 22,000</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for any metric or resource ID"
              className="w-full h-12 px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-950"
            />
            <i className="fas fa-search absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex-grow">
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col gap-4 w-full max-w-[1200px] mt-4">
        <div className="bg-white rounded-lg shadow-sm p-4 h-96"></div>
      </div>
    </div>
  );
};

export default MetricsDashboard;

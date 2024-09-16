import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#EBEBEB] min-w-full">
      <div className="flex flex-col items-center justify-center gap-20 w-[90%] max-w-[1200px]">
        <header className="flex justify-center items-center  w-full">
          <div className="flex items-center w-full max-w-4xl gap-4">
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex justify-between w-40 h-12 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-950 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Region
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
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-950"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Tamil Nadu
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-950"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Kerala
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-950"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Karnataka
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative flex-grow w-80">
              <input
                type="text"
                placeholder="Search for any metric or resource ID"
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
              <i className="fas fa-search absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[
            { name: "EBS", value: 9 },
            { name: "EC2", value: 20 },
            { name: "VM Instances", value: 26 },
            { name: "RDS", value: 9 },
            { name: "S3", value: 9 },
            { name: "Logs", value: 9 },
            { name: "EBS", value: 9 },
            { name: "EBS", value: 9 },
            { name: "EBS", value: 9 },
          ].map((item, index) => (
            <div
              key={index}
              className="p-10 border rounded-lg bg-white flex justify-between items-center"
            >
              <span className="font-semibold text-lg">{item.name}</span>
              <span className="text-[#1D3777] font-bold text-xl">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

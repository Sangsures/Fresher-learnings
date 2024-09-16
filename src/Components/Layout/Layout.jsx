import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EBEBEB]">
      {/* Navbar */}
      <div className="w-full fixed top-0 z-10 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex w-full pt-16">
        {/* Sidebar */}
        <div className="fixed top-16 left-0 h-full text-white w-64">
          <Sidebar />
        </div>
        
        {/* Content Area */}
        <div className="flex-grow ml-64 overflow-y-auto pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

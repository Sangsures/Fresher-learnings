import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { MdSearch } from 'react-icons/md';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className=' p-5 flex flex-row justify-end items-center fixed top-0 left-0 w-full z-50 bg-[#EBEBEB]'>


      <div className='flex flex-row gap-5 items-center justify-end'>
        {isSearchOpen ? (
          <input type="text" className="border rounded p-2" placeholder="Search" />
        ) : (
          <MdSearch size={24} className='cursor-pointer' onClick={() => setIsSearchOpen(true)} />
        )}
        <CgProfile size={24} className='cursor-pointer' />
        <BiSolidMessageSquareDetail size={24} className='cursor-pointer' />
        <FaBell size={24} className='cursor-pointer stroke-1' />
        <IoExit size={24} className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar;


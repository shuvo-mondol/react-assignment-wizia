import React, { useState } from 'react';
import Logo from "./Logo.jpg";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#002228] text-white border-b border-slate-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="text-2xl font-bold">
            <img src={Logo} alt="" className='lg:w-28 md:w-24' />
        </div>

        
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex flex md:items-center space-y-4 md:space-y-0 md:space-x-6 space-x-4 absolute md:static left-0 pl-1 w-full md:w-auto bg-gray-800 md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className='pl-2'>
            <a
              href="#About us"
              onClick={closeMenu}
              className="block lg:px-4 py-2 pt-6 md:pt-2 md:text-base text-[8px] hover:text-gray-300"
            >
             About Us
            </a>
          </li>
          <li>
            <a
              href="#Pricing"
              onClick={closeMenu}
              className="block lg:px-4 py-2 md:text-base text-[8px] hover:text-gray-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#Customers"
              onClick={closeMenu}
              className="block lg:px-4 py-2 md:text-base text-[8px] hover:text-gray-300"
            >
              Customers
            </a>
          </li>
          <li>
            <a
              href="#Solutions"
              onClick={closeMenu}
              className="block lg:px-4 py-2 md:text-base text-[8px] hover:text-gray-300"
            >
              Solution
            </a>
          </li>

          {/* Buttons */}
          <div className="flex md:space-x-4 gap-4 md:space-y-0 px-4 md:px-0 lg:pl-72 md:pl-8 pb-2 ">
            <button className=" bg-[#0FF1F6] hover:bg-blue-600 text-black px-4  rounded-full lg:text-[16px] md:text-[13px] text-[8px] ">
            Book a Demo
            </button>
            <button className=" hover:bg-green-600 text-white px-4 py-2 rounded-full border lg:text-[16px] md:text-[13px] text-[8px] ">
            Contact Us
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

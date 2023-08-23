import React from 'react';
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-40">
          <a href="/" className="text-white text-2xl font-bold">
          <img
              src="/logofull.svg"  
              alt="Restaurant Logo"
              className="h-full w-full m-0" 
            />
          </a>
        </div>

        {/* Menu Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="/menu" className="text-white hover:text-gray-300">
              Menu
            </a>
          </li>
          <li>
            <a href="/festival" className="text-white hover:text-gray-300">
              Festival
            </a>
          </li>
          <li>
            <a href="/find-us" className="text-white hover:text-gray-300">
              Find Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

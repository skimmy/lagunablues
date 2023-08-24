import React from 'react';
import { pubPath } from '@/lib/util';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center w-40">
          <a href="/" className="text-white text-2xl font-bold">
          <img
              src={pubPath("/logofull.svg")}
              alt="Restaurant Logo"
              className="h-full w-full m-0" 
            />
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/menu" className="text-white hover:text-gray-300">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/festival" className="text-white hover:text-gray-300">
              Festival
            </Link>
          </li>
          <li>
            <Link href="/find-us" className="text-white hover:text-gray-300">
              Find Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

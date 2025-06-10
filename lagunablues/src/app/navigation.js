"use client";

import { React, useState } from "react";
import { pubPath } from "@/lib/util";
import Link from "next/link";

const menuItems = [
  { label: "Menu", href: "/menu" },
  // { label: "Festival", href: "/festival" },
  // { label: "Buy", href: "/festival/merch" },
  { label: "Find Us", href: "/find-us" },
];

const MenuLinks = ({ }) => {
  return (
    menuItems.map((item, index) => (
      <div key={index}>
        <Link href={item.href} className="text-white hover:text-gray-300">
          {item.label}
        </Link>
      </div>
    ))
  );
}

const HomeNavItem = () => {
  return (
    <div className="flex items-center w-40">
      <Link href="/" className="text-white text-2xl font-bold">
        <img
          src={pubPath("/logofull.svg")}
          alt="Laguna Blues"
          className="h-full w-full m-0"
        />
      </Link>
    </div>
  );
}

const LargeScreenNavMenu = () => {
  return (
    <div className="hidden sm:flex">
      <div className="flex space-x-4">
        <MenuLinks />
      </div>
    </div>
  );
}

const MenuDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed flex flex-col justify-center items-center top-20 right-0 h-full w-fulltransition-transform duration-300 transform ${isOpen ? 'translate-x-2' : 'translate-x-[100px] '
      }`}>
      <div className="bg-slate-800 flex-co px-5 py-3">
        <MenuLinks />
      </div>
    </div>
  );
}

const SmallScreenNavMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="sm:hidden flex">
      <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} >
        <svg className="fill-current"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        <MenuDrawer isOpen={isDrawerOpen} />
      </button>
    </div>
  );
}

const Navigation = () => {

  return (
    <nav className="bg-black p-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center drop-shadow">
        <HomeNavItem />
        <LargeScreenNavMenu />
        <SmallScreenNavMenu />
      </div>
    </nav>
  );
};

export default Navigation;

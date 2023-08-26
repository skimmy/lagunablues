import React from "react";
import { pubPath } from "@/lib/util";
import Link from "next/link";

const menuItems = [
  { label: "Menu", href: "/menu" },
  { label: "Festival", href: "/festival" },
  { label: "Buy", href: "/festival/merch" },
  { label: "Find Us", href: "/find-us" },
];

const Navigation = () => {
  return (
    <nav className="bg-black p-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center drop-shadow">
        <div className="flex items-center w-40">
          <Link href="/" className="text-white text-2xl font-bold">
            <img
              src={pubPath("/logofull.svg")}
              alt="Laguna Blues"
              className="h-full w-full m-0"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          {
            menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-white hover:text-gray-300">
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>

      </div>
    </nav>
  );
};

export default Navigation;

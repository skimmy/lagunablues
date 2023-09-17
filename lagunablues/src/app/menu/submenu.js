"use client";

import Accordion from "../components/accordion";

const MenuItem = ({ item }) => {
    return (
        <div className="even:bg-gray-800 odd:bg-gray-700 p-2 hover:bg-red-800 p-2 flex items-center cursor-pointer">
            <div className="flex-1">
                <p className="text-lg font-bold">{item.number} - {item.name}</p>
                <p className="font-thin">{item.description.join(" - ")}</p>
            </div>
            <div className="ml-3">
                <p className="ml-4text-right text-lg">{item.price} €</p>
            </div>
        </div>
    )
}

export default function SubMenu({ title, items }) {
    return (
        <Accordion title={title}>
            {items.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)}
        </Accordion>
    );
}
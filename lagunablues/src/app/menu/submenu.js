"use client";

import Accordion from "../components/accordion";

const MenuItem = ({ item }) => {
    return (
        <div className="mb-5">
        <div className="p-2 mt-3 flex items-center cursor-pointer">
            <div className="flex-1">
                <p className="text-red-100 text-lg font-bold">{item.name}</p>
                <p className="text-yellow-100 font-thin">{item.description.join(" - ")}</p>
            </div>
            <div className="ml-3">
                <p className="ml-4text-right text-lg text-yellow-100">{item.price} €</p>
            </div>
        </div>
        <hr className="mt-3 mx-auto w-full opacity-50 border-laguna-red" />
        </div>
    )
}

export default function SubMenu({title, items}) {
    return (
        <Accordion title={title}>
            {items.map( (item, index) => <MenuItem key={index} item={item}></MenuItem>)}
        </Accordion>
    );
}
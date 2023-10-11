"use client";

import Accordion from "../components/accordion";

const MenuItem = ({ item }) => {
    return (
        <div className="even:bg-gray-800 odd:bg-gray-700 hover:bg-red-800 px-7 py-2  flex items-center cursor-pointer">
            <div className="flex-1">
                <p className="text-lg">{item.number} - {item.name}</p>
                <p className="font-thin font-xs">{item.description.join(" - ")}</p>
            </div>
            <div className="ml-3">
                <p className="ml-4text-right text-lg">{item.price.toFixed(2)} €</p>
            </div>
        </div>
    )
}

export default function SubMenu({ title, items }) {
    return (
        <Accordion title={title}>
            {Object.keys(items).map((subCat, idx) =>
                <div key={idx}>
                    {subCat !== "" ? <div className="text-2xl font-thin tracking-widest bg-gray-600 text-white p-2 content-center uppercase">{subCat}</div> : ""}
                    {items[subCat].sort((a,b) => a.number - b.number).map((item, index) => <MenuItem key={index} item={item}></MenuItem>)}
                </div>
            )}
        </Accordion>
    );
}
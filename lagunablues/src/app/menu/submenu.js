"use client";

import {GiFlour, GiMussel} from "react-icons/gi";
import {LuBean, LuCarrot, LuMilk} from "react-icons/lu";
import {PiFishSimple, PiEgg, PiShrimp} from "react-icons/pi";
import {TbBrandPeanut} from "react-icons/tb";
import Accordion from "../components/accordion";

const notesInfo = {
    "A": {
        "symbol": "A",
        "text": "Gluten"
    },

    "B": {
        "symbol": "B",
        "text": "Ei"
    },

    "C": {
        "symbol": "C",
        "text": "Fisch"
    },

    "D": {
        "symbol": "D",
        "text": "Milchproduchte"
    },

    "E": {
        "symbol": "E",
        "text": "Seller"
    },

    "F": {
        "symbol": "F",
        "text": "Krebstiere"
    },

    "G": {
        "symbol": "G",
        "text": "Weichtiere"
    },

    "H": {
        "symbol": "H",
        "text": "Schalenfruchte"
    },

    "I": {
        "symbol": "I",
        "text": "Soja"
    },

}

function symbol2Icon(s) {
    switch (s) {
        case "A":
            return <GiFlour className="inline" />;
        case "B":
            return <PiEgg className="inline" />
        case "C":
            return <PiFishSimple className="inline"/>;
        case "D":
            return <LuMilk className="inline" />;
        case "E":
            return <LuCarrot className="inline" />;
        case "F":
            return <PiShrimp className="inline" />;
        case "G":
            return <GiMussel className="inline" />;
        case "H":
            return <TbBrandPeanut className="inline" />;
        case "I":
            return <LuBean className="inline" />;
        case undefined:
        default:
            return "";
    }
}


const Note = ({info}) => {
    return (
        <>
        {info ? <div className="group relative inline text-[0.9rem] ml-1 align-top text-gray-300">
           {symbol2Icon(info["symbol"])}

            <div className="absolute hidden group-hover:inline w-max bottom-4 left-1/2 mr-3 p-1 rounded-sm bg-gray-300 text-gray-700">
                {`${info["text"]}`}
            </div>
        </div> : ""}
        </>
    );
}


const MenuItem = ({ item }) => {
    return (
        <div className="even:bg-gray-800 odd:bg-gray-700 hover:bg-red-800 px-7 py-2 flex items-center cursor-pointer print:text-black">
            <div className="flex-1">
                
                <p className="text-lg">{item.number} - {item.name} <span className="ml-2">{item.notes.map(i => <Note info={notesInfo[i]}></Note>)}</span></p>
                <p className="font-thin font-xs">{item.description.join(" - ")}</p>
            </div>
            <div className="ml-3">
                <p className="ml-4text-right text-lg">{item.price.toFixed(2)} €</p>
            </div>
        </div>
    )
}

const InfoItem = ({ item }) => {
    return (
        <div className="bg-gray-600 px-7 py-2 flex items-center cursor-pointer print:text-black">
            <div className="flex-1">
                <p className="font-thin text-xl text-center">{item.name}</p>
            </div>
        </div>
    );
}

export default function SubMenu({ title, items }) {
    return (
        <Accordion title={title}>
            {Object.keys(items).map((subCat, idx) =>
                <div key={idx}>
                    {subCat !== "" ? <div className="text-2xl font-thin tracking-widest bg-gray-600 text-white p-2 content-center uppercase">{subCat}</div> : ""}
                    {items[subCat]
                        .sort((a,b) => a.number - b.number)
                        .map((item, index) => item.number < 900 ? <MenuItem key={index} item={item}></MenuItem> : <InfoItem key={index} item={item}></InfoItem>)}
                </div>
            )}
        </Accordion>
    );
}
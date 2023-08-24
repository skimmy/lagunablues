"use client"
import React, { useState } from 'react';

const AccordionItem = ({ item }) => {
    return (
        <div className="mb-5">
        <div className="mt-2 flex items-center cursor-pointer">
            <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex-1">
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-300">{item.description}</p>
            </div>
            <p className="text-right">{item.price}</p>
        </div>
        <hr className="mt-2 mx-auto w-full border-t-2 border-gray-700" />
        </div>
    )
}

const Accordion = ({ title, items }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="border border-gray-300 p-2 mb-2 rounded">
            <div
                className="flex items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg">{title}</h2>
                <div className="ml-2">
                    {expanded ? (
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
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    ) : (
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
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {expanded && (
                <div>
                {items.map((item, index) => (
                    <AccordionItem key={index} item={item}></AccordionItem>
                ))}
            </div>
                    
            )}
        </div>
    );
};


export default Accordion;

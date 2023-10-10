"use client"
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className=" border-laguna-red mb-4 rounded">
            <div
                className="flex items-center cursor-pointer bg-red-950"
                onClick={toggleAccordion}
            >
                <h2 className="text-[1.5rem] text-laguna-yellow p-2">{title}</h2>
                <div className="ml-2 grow">
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
                                className="text-laguna-yellow"
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
                                className="text-laguna-yellow"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {expanded && (
                <div>
                    {children}
                </div>
                    
            )}
        </div>
    );
};


export default Accordion;

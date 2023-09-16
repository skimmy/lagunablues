"use client"
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="border border-laguna-red p-2 mb-4 rounded">
            <div
                className="flex items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-xl text-laguna-yellow">{title}</h2>
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

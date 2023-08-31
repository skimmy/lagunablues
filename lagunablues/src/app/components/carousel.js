"use client";
import React, { useState, useEffect } from 'react';

const Carousel = ({ images, showButtons = true, switchTime = 5000, brightness=100 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Move to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Move to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, switchTime);
        return () => clearInterval(interval);
    }, [currentIndex]);
// .container {
//   display: grid;
//   grid-template: "container";
//   place-items: center;
//   place-content: center;
//   overflow: hidden;
//   max-height: clamp(450px, 50vh, 600px);
// }

// .container > * {
//   grid-area: container;
//   max-width: 1000px;
// }
    return (
        <div className="grid grid-cols-1 justify-items-center overflow-hidden max-h-screen w-full">
            {images.map((image, index) => (
                <div
                    key={index}
                    
                    className={`min-w-full min-h-full row-start-1 row-end-1 col-start-1 col-end-1 transition-opacity duration-1000 brightness-30 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="object-cover w-full"
                    />
                </div>
            ))}
            <button
                className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded ${!showButtons ? 'hidden' : ''}`}
                onClick={prevSlide}
            >
                Previous
            </button>
            <button
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded ${!showButtons ? 'hidden' : ''}`}
                onClick={nextSlide}
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;

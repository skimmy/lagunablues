import React, { useState, useEffect } from 'react';

const Carousel = ({ images, showButtons = true, switchTime = 6000 }) => {
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

    return (
        <div className="relative h-96">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`transition-opacity duration-1000 absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-contain object-center"
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

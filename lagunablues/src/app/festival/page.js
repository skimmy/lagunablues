"use client";

import Carousel from "../components/carousel";

const images = [
    "/festival23/2023_001.jpg",
    "/festival23/2023_002.jpg",
    "/festival23/2023_003.jpg",
    "/festival23/2023_004.jpg",
    "/festival23/2023_005.jpg",
]

export default function Festival() {
    return(
        <div>
            <h1>Festival</h1>
            <Carousel images={images} showButtons={false}></Carousel>
        </div>
    )
}
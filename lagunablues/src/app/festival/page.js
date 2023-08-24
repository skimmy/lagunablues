"use client";

import { pubPath } from "@/lib/util";
import Carousel from "../components/carousel";

const images = [
    pubPath("/festival23/2023_001.JPG"),
    pubPath("/festival23/2023_002.JPG"),
    pubPath("/festival23/2023_003.JPG"),
    pubPath("/festival23/2023_004.JPG"),
    pubPath("/festival23/2023_005.JPG"),
]

export default function Festival() {
    return(
        <div>
            <h1>Festival</h1>
            <Carousel images={images} showButtons={false}></Carousel>
        </div>
    )
}
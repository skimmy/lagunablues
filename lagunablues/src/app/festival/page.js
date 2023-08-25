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
    return (
        <div className="relative flex justify-center items-center">

            <Carousel images={images} showButtons={false}></Carousel>

            <div className="absolute inset-y-0 left-0 mt-16 w-full text-center">
                <h1 className="text-6xl">The Festival</h1>
            </div>
        </div>
    )
}
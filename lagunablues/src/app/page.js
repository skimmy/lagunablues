import Carousel from "./components/carousel";

const images = [
  "/foto/lb_001.jpeg",
  "/foto/lb_002.jpeg",
  "/foto/lb_003.jpeg"
];

export default function Home() {
  return (
      <Carousel images={images} showButtons={false}></Carousel>
  )
}




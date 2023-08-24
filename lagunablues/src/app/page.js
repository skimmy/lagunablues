import { pubPath } from "@/lib/util";
import Carousel from "./components/carousel";

const images = [
  pubPath("/foto/lb_001.jpeg"),
  pubPath("/foto/lb_002.jpeg"),
  pubPath("/foto/lb_003.jpeg")
];

export default function Home() {
  return (
      <Carousel images={images} showButtons={false}></Carousel>
  )
}




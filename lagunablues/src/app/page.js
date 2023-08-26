import { pubPath } from "@/lib/util";
import Carousel from "./components/carousel";

const images = [
  pubPath("/foto/lb_001.jpeg"),
  pubPath("/foto/lb_002.jpeg"),
  pubPath("/foto/lb_003.jpeg")
];

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1">
      <div className="z-1 row-start-1 row-end-1 col-start-1 col-end-1 ">
        <Carousel images={images} showButtons={false}></Carousel>
      </div>
      <div className="z-20 row-start-1 row-end-1 col-start-1 col-end-1 left-0 z-2 mt-0 w-full text-center">
        <img className="w-full h-40 bg-white bg-opacity-40" src={pubPath("/logofull.svg")}></img>
         <div className="pt-8 pb-8 text-left">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mt-4">Our history</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, dui sit amet feugiat ultrices, nibh erat volutpat odio, ut congue eros sapien et justo. Ut posuere tortor sed volutpat cursus. Sed pretium leo a lacus blandit varius. Mauris non nunc eget felis pretium venenatis. Nulla accumsan nulla leo. Maecenas semper lacus nec volutpat eleifend. Proin feugiat enim sed nunc semper, at tincidunt leo mattis. Fusce iaculis justo ac neque gravida, sed commodo mi semper. Nam pellentesque tempor quam eget interdum. Aenean mattis quam vel dolor iaculis semper. Nulla rutrum, ante vitae auctor vulputate, quam augue ullamcorper nisl, sit amet commodo tortor quam mattis tortor. Praesent placerat vitae libero quis porttitor.</p>
            <h2 className="text-4xl mt-4">Our philosophy</h2>
            <hr />
            <p>Vivamus quis tristique augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut congue nisl quis elementum fermentum. Mauris at elit mollis urna dignissim varius vitae in erat. Integer at dui gravida, ultrices nibh ut, lobortis augue. Suspendisse vulputate urna nec posuere tincidunt. Donec aliquet porta commodo. Maecenas hendrerit ipsum nec maximus aliquam. In eu finibus orci. Sed efficitur orci et lobortis accumsan. Sed erat ligula, consectetur id molestie vitae, viverra non sem.</p>
          </div>
        </div> 
      </div>
    </div>
</>
  )
}




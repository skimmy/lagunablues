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
            <h2 className="text-4xl mt-1">Liebe Gäste,</h2>
            
            <p className="mt-2"> die meisten von Ihnen wissen bereits über uns und unser Leben in Falkenstein Bescheid und wissen, Wie viel uns daran liegt, in unserem Lokal höchste Oualität anzubieten</p>
            <p className="mt-2">So fahren wir regelmäßig nach Italien, um bestimmte Waren, die wir für eine gute und originale Küche brauchen. frisch einzukaufen (z.B. Parmaschinken. Salami. Fisch....) Wir führen unser Lokal in Falkenstein nun seit über 27 Jahren und haben seit unserer Eröfinung vicl er-reicht: So entstand nach langjähriger Renovierung mit viel Liebe zum Detail die im Keller liegende Piano-Bar oder etwa unser Blues Festival, das jedes Jahr, besetzt mit hochkarätigen Musikern, bei uns im Garten stattfindet.</p>
            <p className="mt-2">Wir denken, dass die meisten unserer Gäste mit uns serer Leistung sehr zufrieden sind. Natürlich passiert es, dass ab und zu jemand etwas warten muss. Das liegt aber daran. dass wir alle unsere Gerichte espresso, wie man in Italien sagt, also frisch zubereiten (Nudeln. Sauce, Fleisch, Fisch, Pizza, ...). Seien Sie jedenfalls sicher, dass wir ständig bemüht sind. thre Wünsche so weit es uns möglich ist, zu erfüllen. Wir bedanken uns ganz herzlich bei allen unseren Grasten, die unsere Benensart 3kzentieren und gin. schen allen einen "<span className="font-bold">buon appetito</span>"</p>
            <p className="mt-2 align-end">Familie Schimd Duilio, Chiara und Junior Riccardo</p>
            {/* <h2 className="text-4xl mt-4">Our philosophy</h2>
            <hr />
            <p>Vivamus quis tristique augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut congue nisl quis elementum fermentum. Mauris at elit mollis urna dignissim varius vitae in erat. Integer at dui gravida, ultrices nibh ut, lobortis augue. Suspendisse vulputate urna nec posuere tincidunt. Donec aliquet porta commodo. Maecenas hendrerit ipsum nec maximus aliquam. In eu finibus orci. Sed efficitur orci et lobortis accumsan. Sed erat ligula, consectetur id molestie vitae, viverra non sem.</p> */}
          </div>
        </div> 
      </div>
    </div>
</>
  )
}




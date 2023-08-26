import SellItem from "./sellitem";

const items = [
    { name: "CD 2023", price: "15€", thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/CD_icon_test.svg/1200px-CD_icon_test.svg.png" },
    { name: "Women T-shirt", price: "16€" },
    { name: "Man T-shirt", price: "16€", thumbnail: "https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" },
    { name: "Unisex jumper", price: "22€" },
]

export default function FestivalMerch() {
    return (
        <div>
            <h1 className="text-center my-4 text-4xl md:text-6xl text-laguna-red">Laguna<span className="text-laguna-yellow" style={{textShadow: "1px 1px #000000"}}>Blues</span> Shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8">
                {items.map((item, index) => (
                    <div className="place-self-center mb-4 p-6 border border-double border-2 hover:bg-red-950">
                        <SellItem key={index} item={item}></SellItem>
                    </div>
                ))}
            </div>
        </div>
    );
}
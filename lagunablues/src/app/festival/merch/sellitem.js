import { pubPath } from "@/lib/util";

function ItemPrice({item, currency="€"}) {
    var discount = 0;
    if (item.discountPrice && item.price > item.discountPrice) {
        discount = Math.round(item.discountPrice / item.price * 100);
    }
    return (
        <p>
            { discount > 0 ? <span className="bg-laguna-yellow text-black w-fill mr-2">Save {discount}% </span> : ""}
            <span className="text-2xl w-fill mt-1">{discount ? item.discountPrice : item.price} {currency}</span>
        </p>
    );
}

export default function SellItem({item}) {
    return(
        <div className="shadow-md shadow-gray-600 hover:shadow-gray-100">
            <div className="w-fill bg-gray-800 p-4">
                <a href={item.detail_url || "#"}><img className="w-[150px] h-[150px]" src={item.thumbnail ? item.thumbnail : pubPath("/merch/placeholder.svg")}></img></a>
            </div>
            <div className="bg-gray-900 w-fill p-4">
                <p className=""><a className="hover:text-laguna-yellow" href={item.detail_url || "#"}>{item.name}</a></p>
                {item.available > 0 ?
                    <p className={`text-sm ${item.available > 3 ? "text-green-600" : "text-laguna-red"}`}>{item.available > 3 ? "" : "Only "}{item.available} Available</p> :
                    <p className="text-sm text-laguna-red">Out of stock</p>
                    
                }
                <ItemPrice item={item}></ItemPrice>
            </div>
        </div>
    );
}
import { pubPath } from "@/lib/util";

export default function SellItem({item}) {
    return(
        <div>
            <img className="w-[150px] h-[150px]" src={item.thumbnail ? item.thumbnail : pubPath("/merch/placeholder.svg")}></img>
            <p>Item: {item.name}</p>
            <p>Price: {item.price}</p>
        </div>
    );
}
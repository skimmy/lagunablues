import { pubPath } from "@/lib/util";
import SubMenu from "./submenu";

const subMenus = [
    {
        title: "Pizza",
        item_file: pubPath("/menu/pizza.json"),
    },
    {
        title: "Fish",
        item_file: pubPath("/menu/fish.json")
    }
]

export default function Menu() {
    return (
        <div>
            <h1 className="text-xl">Menu</h1>
            <div>
                {subMenus.map((menu, index) => (
                    <SubMenu key={index} title={menu.title} url={menu.item_file} />
                ))}
            </div>
        </div>
    );
}
import SubMenu from "./submenu";

const subMenus = [
    {
        title: "Pizza",
        item_file: "/menu/pizza.json",
    },
    {
        title: "Fish",
        item_file: "/menu/fish.json"
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
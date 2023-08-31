"use client";

import { pubPath } from "@/lib/util";
import SubMenu from "./submenu";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loading";

const sMenus = [
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
    const [loading, setLoading] = useState(true);
    const [subMenus, setSubMenus] = useState(null);
    const url = pubPath("/menu/menu_en.json")
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data => {
                setLoading(false);
                setSubMenus(data);
            }))
            .catch(error => {
                setLoading(false);
                setSubMenus([]);
            })
        setLoading(false);
        setSubMenus(sMenus);
    }, [])
    return (
        <div>
            <h1 className="text-center my-4 text-4xl md:text-6xl text-laguna-red">Me<span className="text-laguna-yellow" style={{textShadow: "1px 1px #000000"}}>nu</span></h1>
            <div className="flex justify-center items-center">
                { loading ?
                <div className="mt-8">
                    <LoadingSpinner width="w-16" height="h-16" circleColor="text-laguna-yellow" spinColor="fill-laguna-red"/>
                </div> :
                <div className="w-full">
                    {subMenus.map((menu, index) => (
                        <SubMenu key={index} title={menu.title} url={pubPath(menu.item_file)} />
                    ))}
                </div>}
            </div>
        </div>
    );
}
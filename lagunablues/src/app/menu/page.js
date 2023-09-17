"use client";

import SubMenu from "./submenu";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loading";
import { csvSubMenuToJSON } from "./lib/parser";


export default function Menu() {
    const [loading, setLoading] = useState(true);
    const [subMenus, setSubMenus] = useState({});
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgamVhNXghGnNR_X4GiyO5k1X7_UXucGH86F4BdhdGJTcMkN2Jf7X_8VwzO84X3CgoKq9VVxK2xuHY/pub?output=tsv";
    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then((data => {
                setLoading(false);
                setSubMenus(csvSubMenuToJSON(data));
            }))
            .catch(error => {
                setLoading(false);
                setSubMenus({ err: "Error" });
                console.log(error);
            })
    }, [])
    return (
        loading ?
            <div className="mt-8">
                <LoadingSpinner width="w-16" height="h-16" circleColor="text-laguna-yellow" spinColor="fill-laguna-red" />
            </div> :
            <div className="w-full mx-3 md:mt-3">
                {Object.keys(subMenus).map((category, index) => (
                    <SubMenu key={index} title={category} items={subMenus[category]} />
                ))}
            </div>
    );
}
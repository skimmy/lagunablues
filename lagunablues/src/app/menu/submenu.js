"use client";
import { useState, useEffect } from "react";
import Accordion from "../components/accordion";

export default function SubMenu({ title, url }) {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
                setLoading(false);
            });
    }, []);



    return (
        <>
            {loading ? <div>Loading {title} ({url})</div> : <Accordion title={title} items={items} />}
        </>
    );
}
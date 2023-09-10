import React, { useEffect, useEffet, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from "../../components/Item";
import {setItems} from '../../state';


const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    console.log("🚀 ~ file: ShoppingList.jsx:12 ~ ShoppingList ~ items:", items)
    const isNonMobile = useMediaQuery("(mid-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));
    }

    useEffect(() => {
        getItems();
    }, []) //eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>shopping list</div>
    )
};

export default ShoppingList;
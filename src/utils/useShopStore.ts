import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

export interface productItem {
    title: string
    desc: string
    price: number
    picture: string
}


type filterOptions = "title" | "price" | ""

interface filterType {
    type: filterOptions,
    asc: boolean
}

export default function useShopStore(productName?: string) {
    const [val, setVal] = useLocalStorage<productItem>("shop")
    const [filter, setFilter] = useState<filterType>({
        type: "",
        asc: true
    })
    const navigate = useNavigate();

    const changeValue = async (value: productItem, type: "add" | "update") => {
        await setVal(prev => {
            let newVal
            if (type === "add") newVal = [...prev, value]
            if (type === "update") newVal = prev.map((eachValues) => eachValues.title === productName ? value : eachValues)
            return newVal!
        })
        await navigate("/");
    }

    const specificProduct = val.find((eachVal) => eachVal.title === productName)


    const changeFilter = (opts: filterOptions) => {
        setFilter(filterPrev => {
            setVal(valuesPrev => {
                if (opts === "price") {
                    return filterPrev.asc
                        ? valuesPrev.sort((a, b) => a.price - b.price)
                        : valuesPrev.sort((a, b) => b.price - a.price)
                }
                if (opts === "title") {
                    return filterPrev.asc
                        ? valuesPrev.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                        : valuesPrev.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1)
                }
                return valuesPrev

            })
            return { type: opts, asc: filterPrev.type === opts ? !filterPrev.asc : true }
        })
        
        console.log(val, filter)
    }
    

    return {val, changeValue, specificProduct, filter, changeFilter}
}
import { useState } from "react";

export default function useLocalStorage<T>(key: string) { 
    const [val, setVal] = useState<T[]>(JSON.parse(localStorage.getItem(key) as string) ?? [])

    const changeVal = (cb: (prev: T[]) => T[]) => {
        setVal(prev => {
            const newVal = cb(prev)
            localStorage.setItem(key, JSON.stringify(newVal))
            return newVal!
        })
    }

   
    return [val, changeVal] as const
} 
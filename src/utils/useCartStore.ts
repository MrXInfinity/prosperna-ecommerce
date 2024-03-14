import useLocalStorage from "./useLocalStorage";

export interface cartItem {
    title: string
    price: number
    quantity: number
}


export default function useCartStore() { 
    const [val, setVal] = useLocalStorage<cartItem>("cart")
    
    const changeValue = (title: string, price: number) => {
         setVal(prev => {
            let indexOfExistingProduct: number | undefined
             const existingProduct = prev.find((eachCartItem, index) => {
                console.log(eachCartItem.title, title, eachCartItem.title === title)
                if (eachCartItem.title === title) {
                    indexOfExistingProduct = index
                    return eachCartItem
                }
            })

             if (!existingProduct) {
                 console.log("not here")
                 return [...prev, {title, price: price!, quantity: 1}]
            }

            console.log(existingProduct, prev)
            prev.splice(indexOfExistingProduct!, 1)
            existingProduct.quantity += 1
            console.log([...prev, existingProduct])
            return [...prev, existingProduct]
        })
        
    }

    const deleteItem = (title: string) => {
        setVal(prev => prev.filter((eachItem) => eachItem.title !== title))
    }

    const total = () => {
        return val.reduce((total, curr) => total + (curr.price * curr.quantity), 0)
    }

    return {val, changeValue, deleteItem, total} 
} 
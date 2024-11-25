import React, { createContext, useContext, useEffect, useState } from 'react'
import MenuSide from '../Chaire/MenuSide/MenuSide'
import CartItem from '../Chaire/CartItem'

const ShoppingContext = createContext({})

const initialCartItems = localStorage.getItem('Shoppigcart') ? JSON.parse(localStorage.getItem('Shoppigcart')) : []


function ShoppingProvider({children}) {
    const [isOpen , setIsOpne] =useState(false)
    const [cardItems, setcardItems] = useState(initialCartItems)
    useEffect(() => {
        localStorage.setItem('Shoppigcart', JSON.stringify(cardItems))
    },[cardItems])
    const openCard = () => {
        setIsOpne(true)
    }
    const isCloseCard = () => {
        setIsOpne(false)
    }
    const getItemQuantity = (id) => {
        return cardItems.find((item) => item.id === id)?.quantity || 0
    }
    const incrementCadr = (id) => {
        setcardItems((currentItem) => {
            if(currentItem.find((item) => item.id === id) == null){
                return [...currentItem, {id, quantity : 1} ]
            }
            else{
                return currentItem.map((item) => {
                    if(item.id === id){
                        return {...item, quantity : item.quantity + 1}
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }


    const decresCardItem = (id) => {
        setcardItems((currentItem) => {
            if(currentItem.find((item) => item.id === id) == null){
                return currentItem.filter((item) => item.id !== id)
            }
            else{
                return currentItem.map((item) => {
                    if(item.id === id){
                        return {...item,  quantity : item.quantity - 1}
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    } 
    const removeitem = (id) => {
        setcardItems((currentItem) => currentItem.filter((item) => item.id !== id))
    }
    const CartQuantity = cardItems.reduce((quantity, item) => (item.quantity + quantity), 0)
  return (
    <ShoppingContext.Provider value={{cardItems, getItemQuantity, incrementCadr, decresCardItem, removeitem, openCard, isCloseCard, CartQuantity}}>
        {children}
        <MenuSide isOpen={isOpen}/>
    </ShoppingContext.Provider>
  )
}

export default ShoppingProvider


export const useShoppingContext = () =>  useContext(ShoppingContext)
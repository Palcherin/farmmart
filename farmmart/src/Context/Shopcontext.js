import React, { createContext, useState } from 'react'
import { ProductsData } from '../components/Productsdata'

export const ShopContext=createContext()

const getDefaultCart=()=>{
    let cart={}
    for (let i=1; i<ProductsData.length +1; i++ ){
        cart[i]=0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());

    const getTotalAmount=()=>{
        let totalAmount =0;
        for ( const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo=ProductsData.find((product)=>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }
        return totalAmount;  
    }
    const addToCart=(itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]: prev[itemid]+1}));
    }
    const removeFromCart=(itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]: prev[itemid]-1}));
    }
    const deleteFromCart=(itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]: prev[itemid]-1}));
    }
    const changeCartItems=(newAmount,itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]:newAmount}));
    }
const contextValue={cartItems,addToCart,removeFromCart,changeCartItems,getTotalAmount,deleteFromCart};
console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children} </ShopContext.Provider>
  )
}

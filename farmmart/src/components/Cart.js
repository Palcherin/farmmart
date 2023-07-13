import React from 'react'
import { ProductsData } from './Productsdata'

export const Cart = () => {
  return (
    <div className='cart-container' style={{display:visibility ? "block" : "none"}}>
      <div className='cart-header'>
        <h2>Shopping Cart</h2>
        <button className='btn-lit' onClick={onClose}>
         
        </button>
      </div>
      <div className='cart-product'>
         {products.length===0 &&( <span className='emptycart'>
          your cart is empty
         </span> )}
         {ProductsData.map(product=>(
          <div className='cart'></div>
         ))}
      </div>
    </div>
  )
}
